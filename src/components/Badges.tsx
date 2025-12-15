import { Badge, Wrap } from "@chakra-ui/react";

export type DisplayBadgesProps = {
  badgeData: string[];
};

export const DisplayBadges = ({ badgeData }: DisplayBadgesProps) => {
  return (
    <Wrap>
      {badgeData.map((badge: string) => (
        <Badge key={badge}>{badge}</Badge>
      ))}
    </Wrap>
  );
};
