import { rtkApi } from '@/shared/api/rtkApi';
import { supabaseClient } from '@/shared/api/supabase';
import { errorsHandler } from '@/shared/lib/errorHandler';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { PostgrestError } from '@supabase/supabase-js';

import { CategoryType } from '../model/types/CategoryType';

export const categoriesTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryType[], null>({
      queryFn: async () => {
        try {
          const { data, error } = await supabaseClient.from('categories').select('*');

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

export const useGetCategories = categoriesTableApi.useGetCategoriesQuery;
