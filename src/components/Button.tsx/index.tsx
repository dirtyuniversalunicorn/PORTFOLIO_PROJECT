import type { ButtonProps } from "@/types/ButtonProps";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ buttonTitle, ...props }: ButtonProps) => {
  return (
    <ChakraButton textTransform="uppercase" fontWeight={400} {...props}>
      {buttonTitle}
    </ChakraButton>
  );
};
