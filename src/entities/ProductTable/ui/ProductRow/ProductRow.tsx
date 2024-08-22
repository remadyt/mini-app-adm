import { formatDate } from '@/shared/lib/const/formatDate';
import { Table, Image } from '@mantine/core';

import { IProduct } from '../../model/types/IProduct';
import classes from './ProductRow.module.css';

interface ProductRowProps {
  product: IProduct;
}

export const ProductRow = (props: ProductRowProps): JSX.Element => {
  const { product } = props;

  return (
    <Table.Tr key={product.id}>
      <Table.Td className={classes.cellTd}>{product.id}</Table.Td>
      <Table.Td className={classes.cellTd}>{formatDate(product.created_at)}</Table.Td>
      <Table.Td className={classes.cellTd}>{product.category_id}</Table.Td>
      <Table.Td className={classes.cellTd}>{product.name}</Table.Td>
      <Table.Td className={classes.cellTd}>{product.composition}</Table.Td>
      <Table.Td className={classes.cellTd}>{`${product.weight} г.`}</Table.Td>
      <Table.Td className={classes.cellTd}>{`${product.price} руб.`}</Table.Td>
      <Table.Td className={classes.cellTd}>
        <Image radius="md" h={50} w="auto" fit="cover" src={product.image} />
      </Table.Td>
    </Table.Tr>
  );
};
