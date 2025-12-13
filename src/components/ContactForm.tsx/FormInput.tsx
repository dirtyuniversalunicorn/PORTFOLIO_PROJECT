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

    // TODO let the button be disable when there is no name or email or message
    // TODO only after they are filled, enable button
    // TODO add states: Pending, Failed, Success
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

    // add more cases here
    // case ...:

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
