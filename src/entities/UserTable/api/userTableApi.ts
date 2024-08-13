import { rtkApi } from '@/shared/api/rtkApi';
import { supabaseClient } from '@/shared/api/supabase';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { IUser } from '../model/types/IUser';

const usersTableApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], null>({
      queryFn: async () => {
        const { data, error } = await supabaseClient.from('users').select('*');

        if (error) {
          return {
            error: {
              status: 'Error in the FetchBaseQuery for Users',
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
