export enum AppRoutes {
  MAIN = 'Main',
  CATEGORIES = 'Categories',
  PRODUCTS = 'Products',
  PRODUCT_DETAILS = 'ProductDetails',
  USERS = 'Users',
  // last
  NOT_FOUND = 'NotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CATEGORIES]: '/categories',
  [AppRoutes.PRODUCTS]: '/products',
  [AppRoutes.PRODUCT_DETAILS]: '/products/:id',
  [AppRoutes.USERS]: '/users',
  // last
  [AppRoutes.NOT_FOUND]: '*',
};
