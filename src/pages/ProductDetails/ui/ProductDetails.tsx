import { useGetProductById } from '@/shared/lib/hooks';
import { Button, Card, Center, Image, Loader, Text, Stack, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import classes from './ProductDetails.module.css';

const ProductDetailsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { product, isLoading } = useGetProductById(id);

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  if (isLoading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (!product) {
    return (
      <Center style={{ flexDirection: 'column' }}>
        <Alert icon={<IconAlertCircle size="1rem" />} title="Ошибка" color="red" radius="md" variant="filled">
          {t('products.details.productNotFound')}
        </Alert>
        <Button onClick={onClickBack} variant="outline" mt="xl" size="md">
          {t('products.details.goBackToProductsBtn')}
        </Button>
      </Center>
    );
  }

  return (
    <Center style={{ flexDirection: 'column' }}>
      <Button onClick={onClickBack} variant="outline" mb="xl" size="md">
        {t('products.details.goBackToProductsBtn')}
      </Button>
      <Card shadow="lg" radius="md" withBorder className={classes.card}>
        <Card.Section>
          <Image src={product.image} alt={product.title} h={200} />
        </Card.Section>
        <Stack gap="md">
          <Text size="lg" fw="500">
            {product.title}
          </Text>
          <Text size="sm">{product.composition}</Text>
          <Text size="sm">Вес: {product.weight} г</Text>
          <Text size="sm" fw="700">
            Цена: {product.price} руб.
          </Text>
        </Stack>
      </Card>
    </Center>
  );
};

export default ProductDetailsPage;
