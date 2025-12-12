import { Header } from "./Header";
import { Button } from "../Button.tsx";
import { NavigationList } from "./NavigationList";
import { navigationItems } from "@/constants/navigationItems";
import { MobileMenu } from "./MobileMenu";
import { Brand } from "../Brand";

export const Navigation = async () => {
  return (
    <Header>
      <Brand />
      <NavigationList navigationItems={navigationItems} />
      <Button
        display={{ base: "none", md: "block" }}
        buttonTitle="let's talk"
        variant="transparent"
      />
      <MobileMenu navigationItems={navigationItems} />
    </Header>
  );
};
