import { formatDate } from '@/shared/lib/const/formatDate';
import { errorsHandler } from '@/shared/lib/errorHandler';
import { useDeleteProductFromTable, useUpdateProductFromTable } from '@/shared/lib/hooks';
import { CustomModal } from '@/shared/ui/CustomModal';
import { Table, Image, ActionIcon, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CDN_URL_STORAGE_IMAGES } from '../../model/const/const';
import { useHandlesForProduct } from '../../model/hooks/useHandlesForProduct';
import { IProduct } from '../../model/types/IProduct';
import { ProductTableModalForm } from '../ProductTableModalForm/ProductTableModalForm';
import classes from './ProductRow.module.css';

interface ProductRowProps {
  product: IProduct;
  refetchProducts: () => void;
}

export const ProductRow = ({ product, refetchProducts }: ProductRowProps) => {
  const navigate = useNavigate();

  const { deleteImage } = useHandlesForProduct();
  const { deleteProduct } = useDeleteProductFromTable();
  const { updateProduct } = useUpdateProductFromTable();

  const [isLoadingDeleteProduct, setIsLoadingDeleteProduct] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const toggleEditModal = () => {
    setIsEditModalOpen((previous) => !previous);
  };

  const onHandleViewClick = () => {
    navigate(`/products/${product.id}`);
  };

  const onHandleDeleteProduct = async () => {
    setIsLoadingDeleteProduct(true);

    if (product.image) {
      await deleteImage(product.image);
    }

    await deleteProduct(product.id);

    refetchProducts();

    setIsLoadingDeleteProduct(false);
  };

  const openEditModal = () => {
    formProduct.setValues({
      categoryId: String(product.category_id),
      titleProduct: product.title,
      compositionProduct: product.composition,
      weightProduct: String(product.weight),
      priceProduct: String(product.price),
      imageFile: product.image,
    });

    toggleEditModal();
  };

  const handleSubmitEdit = async (values: typeof formProduct.values) => {
    try {
      const result = await updateProduct(product.id, {
        category_id: Number.parseInt(values.categoryId, 10),
        title: values.titleProduct,
        composition: values.compositionProduct,
        weight: Number.parseFloat(values.weightProduct),
        price: Number.parseFloat(values.priceProduct),
        image: values.imageFile,
      });

      if (!result) {
        throw new Error('The product could not be updated. Please try again.');
      }

      refetchProducts();

      setIsEditModalOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        errorsHandler(error);
      }
    }
  };

  return (
    <>
      <Table.Tr key={product.id}>
        <Table.Td className={classes.cellTd}>{product.id}</Table.Td>
        <Table.Td className={classes.cellTd}>{formatDate(product.created_at)}</Table.Td>
        <Table.Td className={classes.cellTd}>{product.category_id}</Table.Td>
        <Table.Td className={classes.cellTd}>{product.title}</Table.Td>
        <Table.Td className={classes.cellTd}>{product.composition}</Table.Td>
        <Table.Td className={classes.cellTd}>{`${product.weight} г.`}</Table.Td>
        <Table.Td className={classes.cellTd}>{`${product.price} руб.`}</Table.Td>
        <Table.Td className={classes.cellTd}>
          <Image radius="md" h={50} w="auto" fit="cover" src={CDN_URL_STORAGE_IMAGES + product.image} />
        </Table.Td>
        <Table.Td className={classes.cellTd}>
          <Flex justify="center" align="center" gap="md" wrap="wrap">
            <ActionIcon onClick={onHandleViewClick} variant="outline">
              <IconEye size={20} />
            </ActionIcon>
            <ActionIcon onClick={openEditModal} color="yellow" variant="outline">
              <IconPencil size={20} />
            </ActionIcon>
            <ActionIcon onClick={onHandleDeleteProduct} color="red" variant="outline" disabled={isLoadingDeleteProduct}>
              <IconTrash size={20} />
            </ActionIcon>
          </Flex>
        </Table.Td>
      </Table.Tr>

      <CustomModal isModalOpen={isEditModalOpen} onCloseModal={toggleEditModal} title="editProduct">
        <ProductTableModalForm
          formProduct={formProduct}
          handleSubmit={handleSubmitEdit}
          isEditingTextInBtn={isEditModalOpen}
        />
      </CustomModal>
    </>
  );
};
