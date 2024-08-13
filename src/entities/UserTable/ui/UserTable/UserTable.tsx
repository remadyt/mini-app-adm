import { CustomTable } from '@/shared/ui/CustomTable';
import { Center, Loader } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useGetUsers } from '../../api/userTableApi';
import { iconsUserTable } from '../../model/const/iconsUserTable';
import { theadersUserTable } from '../../model/const/theadersUserTable';
import { UserRow } from '../UserRow/UserRow';

export const UserTable = (): JSX.Element => {
  const { t } = useTranslation();
  const { data: users, isLoading: isLoadingUsers } = useGetUsers(null);

  const rows = users?.map((user) => <UserRow key={user.id} user={user} />);

  if (isLoadingUsers) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <CustomTable subheader={t('subheaderusertable')} icons={iconsUserTable} theaders={theadersUserTable} rows={rows} />
  );
};
