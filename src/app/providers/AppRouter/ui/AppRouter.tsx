import { IRoute } from '@/shared/types/router';
import { Center, Loader } from '@mantine/core';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '../config/routeConfig';

export const AppRouter = () => {
  const renderWithWrapper = (route: IRoute) => {
    const element = (
      <Suspense
        fallback={
          <Center style={{ minHeight: '100vh', height: '100%' }}>
            <Loader />
          </Center>
        }
      >
        {route.element}
      </Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  };

  return <Routes>{routes.map(renderWithWrapper)}</Routes>;
};
