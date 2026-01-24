import { Text, Timeline } from "@chakra-ui/react";
import { MdWorkOutline } from "react-icons/md";

export type CareerItemProps = {
  index: string;
  title: string;
  description: string;
  text: string;
};

export const CareerItem = ({ title, description, text }: CareerItemProps) => {
  return (
    <Timeline.Item>
      <Timeline.Connector>
        <Timeline.Separator />
        <Timeline.Indicator>
          <MdWorkOutline />
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content>
        <Timeline.Title textTransform="uppercase" fontSize={20}>
          {title}
        </Timeline.Title>
        <Timeline.Description color="white" fontSize={18}>
          {description}
        </Timeline.Description>
        <Text
          textStyle="md"
          color="whiteAlpha.800"
          lineHeight={1.6}
          fontSize={16}
        >
          {text}
        </Text>
      </Timeline.Content>
    </Timeline.Item>
  );
};
