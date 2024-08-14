import { CustomModal } from '@/shared/ui/CustomModal';
import { CustomTable } from '@/shared/ui/CustomTable';
import { Button, Center, Loader, TextInput, Select } from '@mantine/core';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetProducts } from '../../api/productTableApi';
import { theadersProductTable } from '../../model/const/theadersProductTable';
import { useHandlesForProduct } from '../../model/hooks/useHandlesForProduct';
import { ActionButtonsProductTable } from '../ActionButtonsProductTable/ActionButtonsProductTable';
import { ProductRow } from '../ProductRow/ProductRow';

export const ProductTable = (): JSX.Element => {
  const { t } = useTranslation();

  const { data: products, isLoading: isLoadingProducts } = useGetProducts(null);

  const { isModalOpen, onAddProduct, onCloseModal, onHandleClickActionButtonToAddProduct, formProduct, categories } =
    useHandlesForProduct();

  const rows = products?.map((product) => <ProductRow key={product.id} product={product} />);

  const categoryOptions = useMemo(
    () => (categories ? categories.map((category) => ({ value: String(category.id), label: category.name })) : []),
    [categories],
  );

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
        <TextInput
          label={t('products.forms.label.name')}
          type="string"
          placeholder={t('products.forms.placeholder.name')}
          mb="md"
          key={formProduct.key('nameProduct')}
          {...formProduct.getInputProps('nameProduct')}
        />
        <TextInput
          label={t('products.forms.label.composition')}
          type="string"
          placeholder={t('products.forms.placeholder.composition')}
          mb="md"
          key={formProduct.key('compositionProduct')}
          {...formProduct.getInputProps('compositionProduct')}
        />
        <TextInput
          label={t('products.forms.label.weight')}
          type="number"
          placeholder={t('products.forms.placeholder.weight')}
          mb="md"
          key={formProduct.key('weightProduct')}
          {...formProduct.getInputProps('weightProduct')}
        />
        <TextInput
          label={t('products.forms.label.price')}
          type="number"
          placeholder={t('products.forms.placeholder.price')}
          mb="md"
          key={formProduct.key('priceProduct')}
          {...formProduct.getInputProps('priceProduct')}
        />
        <TextInput
          label={t('products.forms.label.imageUrl')}
          type="string"
          placeholder={t('products.forms.placeholder.imageUrl')}
          mb="md"
          key={formProduct.key('imageUrlProduct')}
          {...formProduct.getInputProps('imageUrlProduct')}
        />
        <Select
          label={t('products.forms.label.category')}
          placeholder={t('products.forms.placeholder.selectCategory')}
          data={categoryOptions}
          mb="md"
          {...formProduct.getInputProps('categoryId')}
        />

        <Button onClick={onAddProduct}>{t('AddProduct')}</Button>
      </CustomModal>
    </>
  );
};
