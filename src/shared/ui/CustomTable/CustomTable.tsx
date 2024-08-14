import { Table } from '@mantine/core';

import { TableHeader } from '../TableHeader';

interface CustomTableProps {
  subheader: string;
  icons?: JSX.Element;
  theaders: string[];
  rows?: JSX.Element[];
}

export const CustomTable = (props: CustomTableProps): JSX.Element => {
  const { subheader, icons, theaders, rows } = props;

  return (
    <>
      <TableHeader subheader={subheader} icons={icons} />

      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            {theaders.map((theader) => (
              <Table.Th key={theader}>{theader}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};
