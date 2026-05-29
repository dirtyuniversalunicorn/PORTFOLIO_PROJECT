import { Button as ChakraButton } from "@chakra-ui/react";
import type { ButtonProps } from "@/types/button-props";

export const Button = ({ buttonTitle, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      textTransform="uppercase"
      fontWeight={400}
      {...props}
      borderRadius={0}
      paddingX={7}
    >
      {buttonTitle}
    </ChakraButton>
  );
};
