import { useGetCategories } from '@/entities/CategoryTable/api/categoryTableApi';
import { supabaseClient } from '@/shared/api/supabase';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetProducts } from '../../api/productTableApi';

export const useHandlesForProduct = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: categories } = useGetCategories(null);

  const formProduct = useForm({
    initialValues: {
      categoryId: '',
      nameProduct: '',
      compositionProduct: '',
      weightProduct: '',
      priceProduct: '',
      imageUrlProduct: '',
    },
  });

  const { refetch } = useGetProducts(null);

  const onAddProduct = useCallback(
    async (values: typeof formProduct.values) => {
      const { error } = await supabaseClient.from('products').insert([
        {
          category_id: Number.parseInt(values.categoryId, 10),
          name: values.nameProduct,
          composition: values.compositionProduct,
          weight: Number.parseFloat(values.weightProduct),
          price: Number.parseFloat(values.priceProduct),
          image: values.imageUrlProduct,
        },
      ]);

      if (error) {
        notifications.show({
          title: t('error'),
          message: error.message,
        });
      } else {
        refetch();
        setIsModalOpen(false);
        formProduct.reset();
      }
    },
    [formProduct, refetch, t],
  );

  const handleSubmit = formProduct.onSubmit((values: typeof formProduct.values) => {
    onAddProduct(values);
  });

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onHandleClickActionButtonToAddProduct = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return {
    isModalOpen,
    handleSubmit,
    onCloseModal,
    onHandleClickActionButtonToAddProduct,
    formProduct,
    categories,
  };
};
