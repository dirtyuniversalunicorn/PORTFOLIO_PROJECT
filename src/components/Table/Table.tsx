"use client";

import { ProjectProps } from "@/types/ProjectsProps";
import { Text, Table as ChakraTable, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export type TableClientProps = {
  projects: ProjectProps[];
};

export const TableClient = ({ projects }: TableClientProps) => {
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
        {projects.map((item: ProjectProps) => (
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
              {item.imageUrl.map((url, index) => (
                <Icon key={index}>
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
