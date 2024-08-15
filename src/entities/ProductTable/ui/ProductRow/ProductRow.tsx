import { formatDate } from '@/shared/lib/const/formatDate';
import { Table } from '@mantine/core';

import { IProduct } from '../../model/types/IProduct';

interface ProductRowProps {
  product: IProduct;
}

export const ProductRow = (props: ProductRowProps): JSX.Element => {
  const { product } = props;

  return (
    <Table.Tr key={product.id}>
      <Table.Td>{product.id}</Table.Td>
      <Table.Td>{formatDate(product.created_at)}</Table.Td>
      <Table.Td>{product.category_id}</Table.Td>
    </Table.Tr>
  );
};
