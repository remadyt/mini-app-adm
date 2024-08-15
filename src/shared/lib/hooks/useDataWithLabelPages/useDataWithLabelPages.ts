import { useTranslation } from 'react-i18next';

import { RoutePath } from '../../const/router';

export const useDataWithLabelPages = () => {
  const { t } = useTranslation();

  return [
    { link: RoutePath.Main, label: t('mainPage.sidebar.label') },
    { link: RoutePath.Categories, label: t('categories.sidebar.label') },
    { link: RoutePath.Products, label: t('products.sidebar.label') },
    { link: RoutePath.Users, label: t('users.sidebar.label') },
  ];
};
