import { Timeline, Text } from "@chakra-ui/react";
import { LuShip } from "react-icons/lu";

export type CareerItemProps = {
  index: number;
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
          <LuShip />
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content>
        <Timeline.Title>{title}</Timeline.Title>
        <Timeline.Description>{description}</Timeline.Description>
        <Text textStyle="sm">{text}</Text>
      </Timeline.Content>
    </Timeline.Item>
  );
};
