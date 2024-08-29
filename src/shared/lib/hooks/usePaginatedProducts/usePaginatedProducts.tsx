import { useGetProducts } from '@/entities/ProductTable/api/productTableApi';
import { useEffect, useState } from 'react';

import { INITIAL_PAGE, ITEMS_PER_PAGE } from './consts';

export const usePaginatedProducts = () => {
  const [activePage, setActivePage] = useState(INITIAL_PAGE);

  const { data, refetch } = useGetProducts({
    page: activePage,
    limit: ITEMS_PER_PAGE,
  });

  const products = data?.data || [];
  const count = data?.count || 0;

  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  useEffect(() => {
    if (activePage > totalPages && totalPages > 0) {
      setActivePage(totalPages);
    } else if (totalPages === 0) {
      setActivePage(INITIAL_PAGE);
    }
  }, [activePage, totalPages]);

  useEffect(() => {
    refetch();
  }, [totalPages, activePage, refetch]);

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  return {
    paginatedProducts: products,
    activePage,
    handlePageChange,
    totalPages,
    totalProducts: count,
    refetchProducts: refetch,
  };
};
