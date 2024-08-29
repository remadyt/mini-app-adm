import { useGetProducts } from '@/entities/ProductTable/api/productTableApi';
import { useMemo } from 'react';

export const useGetProductById = (productId?: string) => {
  const { data, isLoading, isError } = useGetProducts({});

  const product = useMemo(() => {
    const products = data?.data || [];

    if (!products || !productId) {
      return null;
    }

    return products.find((product) => product.id === Number(productId));
  }, [data?.data, productId]);

  return {
    product,
    isLoading,
    isError,
  };
};
