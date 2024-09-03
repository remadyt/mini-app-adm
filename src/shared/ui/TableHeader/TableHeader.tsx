import { Flex, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface TableHeaderProps {
  subheader: string;
  icons: ReactNode;
}

export const TableHeader = ({ subheader, icons }: TableHeaderProps) => {
  return (
    <>
      <Flex justify="space-between" align="center" mb="md">
        <Text>{subheader}</Text>

        <div>{icons}</div>
      </Flex>
    </>
  );
};
