import { Header } from "./Header";
import { Button } from "../Button.tsx";
import { NavigationList } from "./NavigationList";
import { navigationItems } from "@/constants/navigationItems";
import { MobileMenu } from "./MobileMenu";
import { Brand } from "../Brand";
import Link from "next/link";

export const Navigation = async () => {
  return (
    <Header>
      <Brand />
      <NavigationList navigationItems={navigationItems} />
      <Link href="#footer_section">
        <Button
          display={{ base: "none", md: "block" }}
          buttonTitle="let's talk"
          variant="transparent"
        />
      </Link>
      <MobileMenu navigationItems={navigationItems} />
    </Header>
  );
};
