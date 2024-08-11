export enum AppRoutes {
  MAIN = 'Main',
  CATEGORIES = 'Categories',
  // last
  NOT_FOUND = 'NotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CATEGORIES]: '/categories',
  // last
  [AppRoutes.NOT_FOUND]: '*',
};
