import { formatDateForCreatedAtField } from '@/shared/lib/const/formatDateForCreatedAtField';
import { Table } from '@mantine/core';

import { IUser } from '../../model/types/IUser';

interface UserRowProps {
  user: IUser;
}

export const UserRow = (props: UserRowProps): JSX.Element => {
  const { user } = props;

  return (
    <Table.Tr key={user.id}>
      <Table.Td>{user.id}</Table.Td>
      <Table.Td>{formatDateForCreatedAtField(user.created_at)}</Table.Td>
      <Table.Td>{user.user_name}</Table.Td>
    </Table.Tr>
  );
};
