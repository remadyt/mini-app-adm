import { rtkApi } from '@/shared/api/rtkApi';
import { supabaseClient } from '@/shared/api/supabase';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { notifications } from '@mantine/notifications';
import { t } from 'i18next';

import { IUser } from '../model/types/IUser';

const usersTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], null>({
      queryFn: async () => {
        const { data, error } = await supabaseClient.from('users').select('*');

        if (error) {
          notifications.show({
            title: t('error'),
            message: error.message,
          });

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

export const useGetUsers = usersTableApi.useGetUsersQuery;
