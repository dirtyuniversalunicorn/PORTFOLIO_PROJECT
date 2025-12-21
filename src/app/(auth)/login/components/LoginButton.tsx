import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
import { Button } from "@/components/Button.tsx";

export const LoginButton = ({ ...props }) => {
  return (
    <Link href="/login" className="w-full justify-center">
      <Button
        buttonTitle={
          <Flex>
            <Text>Login</Text>
            <BiLogIn color="white" />
          </Flex>
        }
        type="button"
        variant="transparent"
        width="100%"
        {...props}
      />
    </Link>
  );
};
