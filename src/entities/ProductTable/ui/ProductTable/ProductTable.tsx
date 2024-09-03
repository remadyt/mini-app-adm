import { usePaginatedProducts } from '@/shared/lib/hooks';
import { CustomModal } from '@/shared/ui/CustomModal';
import { CustomTable } from '@/shared/ui/CustomTable';
import { Center, Flex, Loader, Pagination, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useGetProducts } from '../../api/productTableApi';
import { theadersProductTable } from '../../model/const/theadersProductTable';
import { useHandlesForProduct } from '../../model/hooks/useHandlesForProduct';
import { ActionButtonsProductTable } from '../ActionButtonsProductTable/ActionButtonsProductTable';
import { ProductRow } from '../ProductRow/ProductRow';
import { ProductTableModalForm } from '../ProductTableModalForm/ProductTableModalForm';

export const ProductTable = (): JSX.Element => {
  const { t } = useTranslation();
  const { paginatedProducts, activePage, handlePageChange, totalPages, totalProducts, refetchProducts } =
    usePaginatedProducts();

  const { isLoading: isLoadingProducts } = useGetProducts({});
  const { isModalOpen, toggleAddProductModal, handleSubmit, formProduct } = useHandlesForProduct();

  const rows = paginatedProducts?.map((product) => (
    <ProductRow key={product.id} product={product} refetchProducts={refetchProducts} />
  ));

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
        icons={<ActionButtonsProductTable onClick={toggleAddProductModal} />}
        theaders={theadersProductTable}
        rows={rows}
      />

      <CustomModal isModalOpen={isModalOpen} onCloseModal={toggleAddProductModal} title="addProduct">
        <ProductTableModalForm formProduct={formProduct} handleSubmit={handleSubmit} />
      </CustomModal>

      <Flex justify="center" align="center" mt="md">
        <Text mr="md">
          {paginatedProducts?.length} / {totalProducts}
        </Text>
        <Pagination value={activePage} onChange={handlePageChange} total={totalPages} />
      </Flex>
    </>
  );
};
