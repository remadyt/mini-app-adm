import { notifications } from '@mantine/notifications';
import { PostgrestError } from '@supabase/supabase-js';
import { t } from 'i18next';

export const errorsHandler = (error: PostgrestError | Error) => {
  notifications.show({
    title: t('error'),
    message: error.message,
  });
};
