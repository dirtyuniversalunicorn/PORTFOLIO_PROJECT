import { Timeline } from "@chakra-ui/react";

// TODO types
export type CareerListProps = {
  children: React.ReactNode;
};

export const CareerList = ({ children }: CareerListProps) => {
  return <Timeline.Root maxW="400px">{children}</Timeline.Root>;
};
