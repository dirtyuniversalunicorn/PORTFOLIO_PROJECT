import { Flex } from "@chakra-ui/react";
import { CareerList, CareerListProps } from "./CareerList";
import { CareerItem, CareerItemProps } from "./CareerItem";

export type CareerProps = {
  jobs: any;
};

export const Career = ({ jobs }: CareerProps) => {
  return (
    <Flex
      maxWidth={1000}
      mx={{ base: "5%", lg: "auto" }}
      flexDirection="column"
      gap={5}
    >
      <CareerList>
        {jobs.map((job: CareerItemProps) => (
          <CareerItem key={job.index} {...job} />
        ))}
      </CareerList>
    </Flex>
  );
};
