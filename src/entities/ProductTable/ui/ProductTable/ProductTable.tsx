import { CustomTable } from '@/shared/ui/CustomTable';
import { Center, Loader } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useGetProducts } from '../../api/productTableApi';
import { iconsProductTable } from '../../model/const/iconsProductTable';
import { theadersProductTable } from '../../model/const/theadersProductTable';
import { ProductRow } from '../ProductRow/ProductRow';

export const ProductTable = (): JSX.Element => {
  const { t } = useTranslation();
  const { data: products, isLoading: isLoadingProducts } = useGetProducts(null);

  const rows = products?.map((product) => <ProductRow key={product.id} product={product} />);

  if (isLoadingProducts) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <CustomTable
      subheader={t('products.subheader.label')}
      icons={iconsProductTable}
      theaders={theadersProductTable}
      rows={rows}
    />
  );
};
