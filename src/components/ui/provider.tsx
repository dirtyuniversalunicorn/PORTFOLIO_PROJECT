"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineRecipe,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const customButton = defineRecipe({
  variants: {
    variant: {
      transparent: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        _hover: {
          bg: "colorPalette.solid/90",
          color: "black",
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { button: customButton },
  },
});

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
