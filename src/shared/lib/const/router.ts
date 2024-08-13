export enum AppRoutes {
  MAIN = 'Main',
  CATEGORIES = 'Categories',
  USERS = 'Users',
  // last
  NOT_FOUND = 'NotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CATEGORIES]: '/categories',
  [AppRoutes.USERS]: '/users',
  // last
  [AppRoutes.NOT_FOUND]: '*',
};
