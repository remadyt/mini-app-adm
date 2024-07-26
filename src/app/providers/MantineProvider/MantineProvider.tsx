import type { PropsWithChildren } from 'react';

import { MantineProvider as MantineWrapper } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';

export const MantineProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineWrapper>
      <Notifications position="bottom-right" limit={5} autoClose={3000} />

      {children}
    </MantineWrapper>
  );
};
