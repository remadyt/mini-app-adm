import { useGetProducts } from '@/entities/ProductTable/api/productTableApi';
import { useMemo } from 'react';

export const useGetProductById = (productId?: string) => {
  const { data: products, isLoading, isError } = useGetProducts(null);

  const product = useMemo(() => {
    if (!products || !productId) {
      return null;
    }

    return products.find((product) => product.id === Number(productId));
  }, [products, productId]);

  return {
    product,
    isLoading,
    isError,
  };
};
