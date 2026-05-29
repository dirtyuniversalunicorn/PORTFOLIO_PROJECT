import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export type ButtonProps = {
  buttonTitle: string | React.ReactNode;
  link?: string;
  variant?: ChakraButtonProps["variant"] | "transparent";
} & ChakraButtonProps;
