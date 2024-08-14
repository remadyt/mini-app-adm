import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { supabaseClient } from '@/shared/api/supabase';
import { rtkApi } from '@/shared/api/rtkApi';
import { notifications } from '@mantine/notifications';
import { t } from 'i18next';

import { ICategory } from '../model/types/ICategory';

export const categoriesTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], null>({
      queryFn: async () => {
        const { data, error } = await supabaseClient.from('categories').select('*');

        if (error) {
          notifications.show({
            title: t('error'),
            message: error.message,
          });

          return { error: { message: error.message } as unknown as FetchBaseQueryError };
        }
        return { data };
      },
    }),
  }),
});

export const useGetCategories = categoriesTableApi.useGetCategoriesQuery;
