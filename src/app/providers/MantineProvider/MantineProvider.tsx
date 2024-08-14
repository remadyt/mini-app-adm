import type { PropsWithChildren } from 'react';

import { MantineProvider as MantineWrapper } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

export const MantineProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineWrapper>
      <Notifications position="bottom-right" limit={5} autoClose={3000} />

      {children}
    </MantineWrapper>
  );
};
