import { RoutePath } from '@/shared/lib/const/router';
import { IRoute } from '@/shared/types/router';
import { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/MainPage/ui/MainPage'));
const CategoriesPage = lazy(() => import('@/pages/CategoriesPage/ui/CategoriesPage'));
const UsersPage = lazy(() => import('@/pages/UsersPage/ui/UsersPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/ui/NotFoundPage'));

export const routes: IRoute[] = [
  {
    path: RoutePath.Main,
    element: <MainPage />,
  },
  {
    path: RoutePath.Categories,
    element: <CategoriesPage />,
  },
  {
    path: RoutePath.Users,
    element: <UsersPage />,
  },
  // last
  {
    path: RoutePath.NotFound,
    element: <NotFoundPage />,
  },
];
