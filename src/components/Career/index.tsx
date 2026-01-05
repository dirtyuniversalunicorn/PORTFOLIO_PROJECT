import { Flex, Timeline } from "@chakra-ui/react";
import { CareerItem, type CareerItemProps } from "./CareerItem";

export type CareerProps = {
  jobs: CareerItemProps[];
};

export const Career = ({ jobs }: CareerProps) => {
  return (
    <Flex
      maxWidth={1000}
      mx={{ base: "5%" }}
      flexDirection="column"
      gap={5}
      mt={12}
    >
      <Timeline.Root size="lg">
        {jobs.map((job: CareerItemProps) => (
          <CareerItem key={job.index} {...job} />
        ))}
      </Timeline.Root>
    </Flex>
  );
};
