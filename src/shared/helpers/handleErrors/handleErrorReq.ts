import { notifications } from '@mantine/notifications';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { t } from 'i18next';

export const handleErrorReq = (error: any) => {
  notifications.show({
    title: t('error'),
    message: error.message,
  });

  return { error: { message: error.message } as unknown as FetchBaseQueryError };
};
