import { Icon, Link } from "@chakra-ui/react";
import { Tooltip as ChakraTooltip } from "@/components/ui/tooltip";

export type IconTooltipProps = {
  content: string;
  link?: string;
  icon: React.ReactNode;
};

export const IconTooltip = ({ content, link, icon }: IconTooltipProps) => {
  if (link) {
    return (
      <ChakraTooltip content={content}>
        <Icon>
          <Link href={link} target="_blank">
            {icon}
          </Link>
        </Icon>
      </ChakraTooltip>
    );
  } else
    <ChakraTooltip content={content}>
      <Icon>{icon}</Icon>
    </ChakraTooltip>;
};
