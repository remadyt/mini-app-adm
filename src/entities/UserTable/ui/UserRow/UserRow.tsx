import { formatDate } from '@/shared/lib/const/formatDate';
import { Table } from '@mantine/core';

import { IUser } from '../../model/types/IUser';

interface UserRowProps {
  user: IUser;
}

export const UserRow = ({ user }: UserRowProps) => {
  return (
    <Table.Tr key={user.id}>
      <Table.Td>{user.id}</Table.Td>
      <Table.Td>{formatDate(user.created_at)}</Table.Td>
      <Table.Td>{user.user_name}</Table.Td>
    </Table.Tr>
  );
};
