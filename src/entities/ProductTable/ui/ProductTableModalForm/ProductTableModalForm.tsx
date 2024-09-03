import { errorsHandler } from '@/shared/lib/errorHandler';
import { Button, Select, TextInput, FileInput, Textarea } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useHandlesForProduct } from '../../model/hooks/useHandlesForProduct';

interface ProductFormValues {
  categoryId: string;
  titleProduct: string;
  compositionProduct: string;
  weightProduct: string;
  priceProduct: string;
  imageFile: string;
}

interface ProductTableModalFormProps {
  formProduct: UseFormReturnType<ProductFormValues>;
  handleSubmit: (values: ProductFormValues) => void;
  isEditingTextInBtn?: boolean;
}

export const ProductTableModalForm = ({
  formProduct,
  handleSubmit,
  isEditingTextInBtn,
}: ProductTableModalFormProps) => {
  const { t } = useTranslation();
  const { uploadImage, categories } = useHandlesForProduct();

  const categoryOptions = useMemo(
    () => (categories ? categories.map((category) => ({ value: String(category.id), label: category.name })) : []),
    [categories],
  );

  const onChangeFileInput = async (file: File | null) => {
    try {
      const uploadedImageUrl = await uploadImage(file);

      if (!uploadedImageUrl) {
        throw new Error('Error uploading image');
      }

      formProduct.setFieldValue('imageFile', uploadedImageUrl || '');
    } catch (error) {
      if (error instanceof Error) {
        errorsHandler(error);
      }
    } finally {
      formProduct.setFieldValue('imageFile', '');
    }
  };

  return (
    <form onSubmit={formProduct.onSubmit(handleSubmit)}>
      <TextInput
        label={t('products.forms.label.title')}
        type="string"
        placeholder={t('products.forms.placeholder.title')}
        mb="md"
        key={formProduct.key('titleProduct')}
        {...formProduct.getInputProps('titleProduct')}
      />
      <Textarea
        label={t('products.forms.label.composition')}
        placeholder={t('products.forms.placeholder.composition')}
        autosize
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
      <FileInput
        label={t('products.forms.label.imageUrl')}
        placeholder={t('products.forms.placeholder.imageUrl')}
        mb="md"
        {...formProduct.getInputProps('image')}
        accept="image/*"
        onChange={onChangeFileInput}
      />
      <Select
        label={t('products.forms.label.category')}
        placeholder={t('products.forms.placeholder.selectCategory')}
        data={categoryOptions}
        mb="md"
        {...formProduct.getInputProps('categoryId')}
      />
      <Button type="submit">{t(isEditingTextInBtn ? 'editProduct' : 'addProduct')}</Button>
    </form>
  );
};
