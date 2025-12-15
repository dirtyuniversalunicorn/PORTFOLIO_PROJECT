import type { ProjectProps } from "@/types/ProjectsProps";
import { Text, Table as ChakraTable, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export type ProjectTableProps = {
  items: ProjectProps[];
};

// TODO provide links for projects

export const Table = ({ items }: ProjectTableProps) => {
  console.log("Table items: ", items);
  return (
    <ChakraTable.Root size="sm" striped interactive>
      <ChakraTable.Header>
        <ChakraTable.Row backgroundColor="transparent">
          <ChakraTable.ColumnHeader>Project Title</ChakraTable.ColumnHeader>
          <ChakraTable.ColumnHeader>Short Description</ChakraTable.ColumnHeader>
          <ChakraTable.ColumnHeader>Technologies</ChakraTable.ColumnHeader>
          <ChakraTable.ColumnHeader textAlign="center">
            Visit
          </ChakraTable.ColumnHeader>
          <ChakraTable.ColumnHeader textAlign="center">
            Image
          </ChakraTable.ColumnHeader>
        </ChakraTable.Row>
      </ChakraTable.Header>
      <ChakraTable.Body>
        {items.map((item: ProjectProps) => (
          <ChakraTable.Row key={item.id}>
            <ChakraTable.Cell>{item.title} </ChakraTable.Cell>
            <ChakraTable.Cell>{item.shortDescription}</ChakraTable.Cell>
            <ChakraTable.Cell>
              <Text>{item.technologies.join(", ")}</Text>
            </ChakraTable.Cell>

            <ChakraTable.Cell textAlign="center">
              <Icon>
                <Link href={`/projects/${item.id}`} target="_blank">
                  <FaExternalLinkAlt />
                </Link>
              </Icon>
            </ChakraTable.Cell>

            <ChakraTable.Cell textAlign="center">
              {item.imageUrl.map((url) => (
                <Icon key={url}>
                  <Link href={url} target="_blank">
                    <FaExternalLinkAlt />
                  </Link>
                </Icon>
              ))}
            </ChakraTable.Cell>
          </ChakraTable.Row>
        ))}
      </ChakraTable.Body>
    </ChakraTable.Root>
  );
};
