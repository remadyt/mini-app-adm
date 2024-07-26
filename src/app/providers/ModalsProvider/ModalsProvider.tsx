import type { PropsWithChildren } from 'react';

import { ModalsProvider as Modals } from '@mantine/modals';

export const ModalsProvider = ({ children }: PropsWithChildren) => {
  return <Modals>{children}</Modals>;
};
