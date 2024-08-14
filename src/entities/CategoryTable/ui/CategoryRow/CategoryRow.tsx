import { formatDate } from '@/shared/lib/const/formatDate';
import { Table } from '@mantine/core';

import { CategoryType } from '../../model/types/CategoryType';

interface CategoryRowProps {
  category: CategoryType;
}

export const CategoryRow = (props: CategoryRowProps) => {
  const { category } = props;

  return (
    <Table.Tr>
      <Table.Td>{category.id}</Table.Td>
      <Table.Td>{category.name}</Table.Td>
      <Table.Td>{formatDate(category.created_at)}</Table.Td>
    </Table.Tr>
  );
};
