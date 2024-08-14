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

  const onAddProduct = useCallback(async () => {
    const { error } = await supabaseClient.from('products').insert([
      {
        category_id: Number.parseInt(formProduct.values.categoryId, 10),
        name: formProduct.values.nameProduct,
        composition: formProduct.values.compositionProduct,
        weight: Number.parseFloat(formProduct.values.weightProduct),
        price: Number.parseFloat(formProduct.values.priceProduct),
        image: formProduct.values.imageUrlProduct,
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
  }, [formProduct, refetch, t]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onHandleClickActionButtonToAddProduct = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return {
    isModalOpen,
    onAddProduct,
    onCloseModal,
    onHandleClickActionButtonToAddProduct,
    formProduct,
    categories,
  };
};
