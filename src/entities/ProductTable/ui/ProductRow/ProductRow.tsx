import { formatDate } from '@/shared/lib/const/formatDate';
import { useDeleteProductFromTable } from '@/shared/lib/hooks';
import { Table, Image, Button, Flex } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useGetProducts } from '../../api/productTableApi';
import { IProduct } from '../../model/types/IProduct';
import classes from './ProductRow.module.css';

interface ProductRowProps {
  product: IProduct;
}

export const ProductRow = (props: ProductRowProps): JSX.Element => {
  const { product } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { refetch } = useGetProducts(null);
  const { deleteProduct } = useDeleteProductFromTable();

  const [isLoadingDeleteProduct, setIsLoadingDeleteProduct] = useState(false);

  const onHandleViewClick = useCallback(() => {
    navigate(`/products/${product.id}`);
  }, [navigate, product.id]);

  const onHandleDeleteProduct = useCallback(async () => {
    setIsLoadingDeleteProduct(true);

    await deleteProduct(product.id);

    refetch();

    setIsLoadingDeleteProduct(false);
  }, [deleteProduct, product.id, refetch]);

  return (
    <Table.Tr key={product.id}>
      <Table.Td className={classes.cellTd}>{product.id}</Table.Td>
      <Table.Td className={classes.cellTd}>{formatDate(product.created_at)}</Table.Td>
      <Table.Td className={classes.cellTd}>{product.category_id}</Table.Td>
      <Table.Td className={classes.cellTd}>{product.title}</Table.Td>
      <Table.Td className={classes.cellTd}>{product.composition}</Table.Td>
      <Table.Td className={classes.cellTd}>{`${product.weight} г.`}</Table.Td>
      <Table.Td className={classes.cellTd}>{`${product.price} руб.`}</Table.Td>
      <Table.Td className={classes.cellTd}>
        <Image radius="md" h={50} w="auto" fit="cover" src={product.image} alt={product.title} />
      </Table.Td>
      <Table.Td className={classes.cellTd}>
        <Flex justify="center" align="center" gap="md">
          <Button onClick={onHandleViewClick}>{t('products.table.columns.actionButtons.view')}</Button>
          <Button onClick={onHandleDeleteProduct} color="red" disabled={isLoadingDeleteProduct}>
            {t('products.table.columns.actionButtons.delete')}
          </Button>
        </Flex>
      </Table.Td>
    </Table.Tr>
  );
};
