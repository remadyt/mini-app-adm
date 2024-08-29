import { rtkApi } from '@/shared/api/rtkApi';
import { supabaseClient } from '@/shared/api/supabase';
import { errorsHandler } from '@/shared/lib/errorHandler';
import { INITIAL_PAGE, ITEMS_PER_PAGE } from '@/shared/lib/hooks/usePaginatedProducts/consts';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { PostgrestError } from '@supabase/supabase-js';

import { IProduct } from '../model/types/IProduct';

const productsTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<{ data: IProduct[]; count: number }, { page?: number; limit?: number }>({
      queryFn: async ({ page = INITIAL_PAGE, limit = ITEMS_PER_PAGE }) => {
        try {
          const start = (page - 1) * limit;
          const end = page * limit - 1;

          const { data, count, error } = await supabaseClient
            .from('products')
            .select('*', { count: 'exact' })
            .order('id', { ascending: true })
            .range(start, end);

          console.log('productsTableApi: page', page);
          console.log('productsTableApi: limit', limit);

          if (error) {
            throw new Error(error.message);
          }

          return {
            data: {
              data: data ?? [],
              count: count ?? 0,
            },
          };
        } catch (error) {
          errorsHandler(error as PostgrestError);
          return { error: { message: (error as Error).message } as unknown as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const useGetProducts = productsTableApi.useGetProductsQuery;
