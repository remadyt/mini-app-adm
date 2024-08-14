import { formatDate } from '@/shared/lib/const/formatDate';
import { Table } from '@mantine/core';

import { ICategory } from '../../model/types/ICategory';

interface CategoryRowProps {
  category: ICategory;
}

export const CategoryRow = (props: CategoryRowProps): JSX.Element => {
  const { category } = props;

  return (
    <Table.Tr>
      <Table.Td>{category.id}</Table.Td>
      <Table.Td>{category.name}</Table.Td>
      <Table.Td>{formatDate(category.created_at)}</Table.Td>
    </Table.Tr>
  );
};
