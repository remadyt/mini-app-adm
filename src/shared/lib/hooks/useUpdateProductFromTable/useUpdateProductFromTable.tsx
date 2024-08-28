import { IProduct } from '@/entities/ProductTable/model/types/IProduct';
import { supabaseClient } from '@/shared/api/supabase';
import { PostgrestError } from '@supabase/supabase-js';
import { useCallback } from 'react';

import { errorsHandler } from '../../errorHandler';

export const useUpdateProductFromTable = () => {
  const updateProduct = useCallback(async (id: number, fieldsForUpdates: DeepPartial<IProduct>) => {
    try {
      const { data, error } = await supabaseClient.from('products').update(fieldsForUpdates).eq('id', id);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      errorsHandler(error as PostgrestError);
    }
  }, []);

  return {
    updateProduct,
  };
};
