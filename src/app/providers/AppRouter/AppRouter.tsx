import type { PropsWithChildren } from 'react';

import { Center, Loader } from '@mantine/core';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppRouter = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Center style={{ minHeight: '100vh', height: '100%' }}>
            <Loader />
          </Center>
        }
      >
        {children}
      </Suspense>
    </BrowserRouter>
  );
};
