import { supabaseClient } from '@/shared/api/supabase';
import { PostgrestError } from '@supabase/supabase-js';
import { useCallback } from 'react';

import { errorsHandler } from '../../errorHandler';

export const useDeleteProductFromTable = () => {
  const deleteProduct = useCallback(async (id: number) => {
    try {
      const { data, error } = await supabaseClient.from('products').delete().eq('id', id);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      errorsHandler(error as PostgrestError);
    }
  }, []);

  return {
    deleteProduct,
  };
};
