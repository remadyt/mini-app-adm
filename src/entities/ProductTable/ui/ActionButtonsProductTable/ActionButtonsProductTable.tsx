import { ActionIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { memo } from 'react';

interface ActionButtonsProductTableProps {
  onClick: () => void;
}

export const ActionButtonsProductTable = memo((props: ActionButtonsProductTableProps) => {
  const { onClick } = props;

  return (
    <ActionIcon variant="outline">
      <IconPlus onClick={onClick} />
    </ActionIcon>
  );
});
