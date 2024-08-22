import { rtkApi } from '@/shared/api/rtkApi';
import { supabaseClient } from '@/shared/api/supabase';
import { errorsHandler } from '@/shared/lib/errorHandler';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { IProduct } from '../model/types/IProduct';

const productsTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      queryFn: async () => {
        const { data, error } = await supabaseClient.from('products').select('*');

        if (error) {
          errorsHandler(error);

          return {
            error: {
              message: error.message,
            } as unknown as FetchBaseQueryError,
          };
        }

        return { data };
      },
    }),
  }),
});

export const useGetProducts = productsTableApi.useGetProductsQuery;
