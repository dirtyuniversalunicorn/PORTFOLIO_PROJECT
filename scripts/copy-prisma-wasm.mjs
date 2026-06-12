import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const sourceDir = path.join(".next", "server", "chunks", "static", "wasm");
const targetDir = path.join(
  ".open-next",
  "server-functions",
  "default",
  "static",
  "wasm",
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
