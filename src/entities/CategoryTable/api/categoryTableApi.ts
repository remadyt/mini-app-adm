import { supabaseClient } from '@/shared/api/supabase';
import { rtkApi } from '@/shared/api/rtkApi';

import { CategoryType } from '../model/types/CategoryType';
import { handleErrorReq } from '@/shared/helpers/handleErrors/handleErrorReq';

export const categoriesTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryType[], null>({
      queryFn: async () => {
        const { data, error } = await supabaseClient.from('categories').select('*');

        if (error) return handleErrorReq(error);

        return { data };
      },
    }),
  }),
});

export const useGetCategories = categoriesTableApi.useGetCategoriesQuery;
