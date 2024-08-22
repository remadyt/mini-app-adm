import { Button, Select, TextInput } from '@mantine/core';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useHandlesForProduct } from '../../model/hooks/useHandlesForProduct';

export const ProductTableModalForm = () => {
  const { t } = useTranslation();

  const { handleSubmit, formProduct, categories } = useHandlesForProduct();

  const categoryOptions = useMemo(
    () => (categories ? categories.map((category) => ({ value: String(category.id), label: category.name })) : []),
    [categories],
  );

  return (
    <form onSubmit={handleSubmit}>
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

      <Button type="submit">{t('AddProduct')}</Button>
    </form>
  );
};
