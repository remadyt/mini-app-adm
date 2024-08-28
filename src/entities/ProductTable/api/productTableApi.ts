import { rtkApi } from '@/shared/api/rtkApi';
import { supabaseClient } from '@/shared/api/supabase';
import { errorsHandler } from '@/shared/lib/errorHandler';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { PostgrestError } from '@supabase/supabase-js';

import { IProduct } from '../model/types/IProduct';

const productsTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      queryFn: async () => {
        try {
          const { data, error } = await supabaseClient.from('products').select('*');

          if (error) {
            throw new Error(error.message);
          }

          return { data };
        } catch (error) {
          errorsHandler(error as PostgrestError);

          return {
            error: {
              message: (error as Error).message,
            } as unknown as FetchBaseQueryError,
          };
        }
      },
    }),
  }),
});

export const useGetProducts = productsTableApi.useGetProductsQuery;
