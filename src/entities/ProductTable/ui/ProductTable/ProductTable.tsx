import { CustomModal } from '@/shared/ui/CustomModal';
import { CustomTable } from '@/shared/ui/CustomTable';
import { Center, Loader } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useGetProducts } from '../../api/productTableApi';
import { theadersProductTable } from '../../model/const/theadersProductTable';
import { useHandlesForProduct } from '../../model/hooks/useHandlesForProduct';
import { ActionButtonsProductTable } from '../ActionButtonsProductTable/ActionButtonsProductTable';
import { ProductRow } from '../ProductRow/ProductRow';
import { ProductTableModalForm } from '../ProductTableModalForm/ProductTableModalForm';

export const ProductTable = (): JSX.Element => {
  const { t } = useTranslation();

  const { data: products, isLoading: isLoadingProducts } = useGetProducts(null);

  const { isModalOpen, onCloseModal, onHandleClickActionButtonToAddProduct } = useHandlesForProduct();

  const rows = products?.map((product) => <ProductRow key={product.id} product={product} />);

  if (isLoadingProducts) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <>
      <CustomTable
        subheader={t('products.subheader.label')}
        icons={<ActionButtonsProductTable onClick={onHandleClickActionButtonToAddProduct} />}
        theaders={theadersProductTable}
        rows={rows}
      />

      <CustomModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} title={t('AddProduct')}>
        <ProductTableModalForm />
      </CustomModal>
    </>
  );
};
