import { Flex, Timeline } from "@chakra-ui/react";
import { CareerItem, CareerItemProps } from "./CareerItem";

export type CareerProps = {
  jobs: any;
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
      <Timeline.Root>
        {jobs.map((job: CareerItemProps) => (
          <CareerItem key={job.index} {...job} />
        ))}
      </Timeline.Root>
    </Flex>
  );
};
