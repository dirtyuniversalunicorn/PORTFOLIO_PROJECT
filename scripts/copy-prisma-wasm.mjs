import {
  copyFile,
  mkdir,
  readdir,
  readFile,
  writeFile,
} from "node:fs/promises";
import path from "node:path";

const sourceDir = path.join(".next", "server", "chunks", "static", "wasm");
const targetDir = path.join(
  ".open-next",
  "server-functions",
  "default",
  "static",
  "wasm",
);
const handlerPath = path.join(
  ".open-next",
  "server-functions",
  "default",
  "handler.mjs",
);

let wasmFiles;

try {
  wasmFiles = (await readdir(sourceDir)).filter((file) =>
    file.endsWith(".wasm"),
  );
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("No server WASM chunks found to copy.");
    process.exit(0);
  }

  throw error;
}

await mkdir(targetDir, { recursive: true });

await Promise.all(
  wasmFiles.map((file) =>
    copyFile(path.join(sourceDir, file), path.join(targetDir, file)),
  ),
);

console.log(`Copied ${wasmFiles.length} server WASM chunk(s) for Cloudflare.`);

const wasmImports = wasmFiles
  .map(
    (file, index) =>
      `import __prismaWasm${index} from "./static/wasm/${file}";`,
  )
  .join("\n");
const wasmMapEntries = wasmFiles
  .map(
    (file, index) =>
      `  "${path.basename(file, ".wasm")}": __normalizePrismaWasm(__prismaWasm${index}),`,
  )
  .join("\n");

let handler = await readFile(handlerPath, "utf8");

if (!handler.includes("globalThis.__prismaWasmModules = {")) {
  const handlerWithWasmMap = handler.replace(
    /^(import [^\n]+(?:;\r?\n|\r?\n))/,
    `$1${wasmImports}\nconst __normalizePrismaWasm = (module) => module?.default ?? module;\nglobalThis.__prismaWasmModules = {\n${wasmMapEntries}\n};\n`,
  );

  if (handlerWithWasmMap === handler) {
    throw new Error(
      "Could not inject Prisma WASM imports into OpenNext handler.",
    );
  }

  handler = handlerWithWasmMap;
}

const patchedHandler = handler.replace(
  /([A-Za-z_$][\w$]*\.v=\(([^)]*)\)=>)new Promise[\s\S]*?\.then\([^=]+=>Object\.assign\([^,]+,[^)]*?\.instance\.exports\)\)(?=,[A-Za-z_$][\w$]*=\{311:1\})/,
  (match, prefix, params) => {
    const [exportsName, _moduleIdName, hashName, importsName] = params
      .split(",")
      .map((param) => param.trim());

    if (!exportsName || !hashName || !importsName) {
      return match;
    }

    return `${prefix}Promise.resolve().then(()=>Object.assign(${exportsName},new WebAssembly.Instance(globalThis.__prismaWasmModules[${hashName}],${importsName}).exports))`;
  },
);

const prismaWasmHash = path.basename(wasmFiles[0], ".wasm");
const patchedPrismaGetter = patchedHandler.replace(
  /getQueryCompilerWasmModule:async\(\)=>\{let\{default:[^}]+}=await [^;]+;return [^}]+}/g,
  `getQueryCompilerWasmModule:async()=>globalThis.__prismaWasmModules["${prismaWasmHash}"]`,
);

if (
  patchedHandler === handler ||
  patchedPrismaGetter === patchedHandler ||
  patchedPrismaGetter.includes(
    "getQueryCompilerWasmModule:async()=>{let{default:",
  )
) {
  throw new Error(
    "Could not patch Next server WASM runtime in OpenNext handler.",
  );
}

await writeFile(handlerPath, patchedPrismaGetter);
console.log("Patched OpenNext server WASM runtime for Cloudflare.");
