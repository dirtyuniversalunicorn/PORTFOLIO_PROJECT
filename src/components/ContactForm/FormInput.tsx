import {
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  type InputProps,
  type TextareaProps,
} from "@chakra-ui/react";

export type FormInputProps = {
  textArea?: boolean;
  submitButton?: boolean;
} & InputProps &
  TextareaProps;

export const FormInput = ({
  textArea,
  submitButton,
  ...props
}: FormInputProps) => {
  switch (true) {
    case textArea:
      return (
        <ChakraTextarea
          borderColor="whiteAlpha.400"
          backgroundColor="whiteAlpha.100"
          borderRadius={0}
          {...props}
        />
      );

    case submitButton:
      return (
        <ChakraInput
          type="submit"
          borderColor="white"
          borderRadius={0}
          textAlign="center"
          {...props}
        />
      );

    default:
      return (
        <ChakraInput
          borderColor="whiteAlpha.400"
          borderRadius={0}
          backgroundColor="whiteAlpha.100"
          {...props}
        />
      );
  }
};
