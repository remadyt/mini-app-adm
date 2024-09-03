import { useGetCategories } from '@/entities/CategoryTable/api/categoryTableApi';
import { useUser } from '@/features/auth/model/useUser';
import { supabaseClient } from '@/shared/api/supabase';
import { errorsHandler } from '@/shared/lib/errorHandler';
import { usePaginatedProducts } from '@/shared/lib/hooks';
import { useForm } from '@mantine/form';
import { useId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useHandlesForProduct = () => {
  const uuid = useId();
  const { user } = useUser();
  const [, setImages] = useState<string[]>([]);

  const getImages = async () => {
    try {
      const { data, error } = await supabaseClient.storage.from('images').list(user?.id + '/');

      if (error) {
        throw error;
      }

      setImages(data.map((file) => file.name));
    } catch (error) {
      if (error instanceof Error) {
        errorsHandler(error);
      }
    }
  };

  const uploadImage = async (file: File | null): Promise<string | undefined> => {
    if (!file || !user) {
      return;
    }

    try {
      const { data, error } = await supabaseClient.storage.from('images').upload(`${user.id}/${uuid}`, file);

      if (error) {
        throw error;
      }

      await getImages();

      return data.path;
    } catch (error) {
      if (error instanceof Error) {
        errorsHandler(error);
      }
    }
  };

  const deleteImage = async (imageName: string) => {
    try {
      const { error } = await supabaseClient.storage.from('images').remove([imageName]);

      if (error) {
        throw error;
      }

      getImages();
    } catch (error) {
      if (error instanceof Error) {
        errorsHandler(error);
      }
    }
  };

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: categories } = useGetCategories(null);

  const formProduct = useForm({
    initialValues: {
      categoryId: '',
      titleProduct: '',
      compositionProduct: '',
      weightProduct: '',
      priceProduct: '',
      imageFile: '',
    },
  });

  const { refetchProducts } = usePaginatedProducts();

  const onAddProduct = useCallback(
    async (values: typeof formProduct.values) => {
      const { error } = await supabaseClient.from('products').insert([
        {
          category_id: Number.parseInt(values.categoryId, 10),
          title: values.titleProduct,
          composition: values.compositionProduct,
          weight: Number.parseFloat(values.weightProduct),
          price: Number.parseFloat(values.priceProduct),
          image: values.imageFile,
        },
      ]);

      if (error) {
        notifications.show({
          title: t('error'),
          message: error.message,
        });
      } else {
        refetchProducts();
        setIsModalOpen(false);
        formProduct.reset();
      }
    },
    [formProduct, refetchProducts, t],
  );

  const handleSubmit = (values: typeof formProduct.values) => {
    onAddProduct(values);
  };

  const toggleAddProductModal = () => {
    setIsModalOpen((previous) => !previous);
  };

  return {
    isModalOpen,
    handleSubmit,
    toggleAddProductModal,
    formProduct,
    uploadImage,
    deleteImage,
    categories,
  };
};
