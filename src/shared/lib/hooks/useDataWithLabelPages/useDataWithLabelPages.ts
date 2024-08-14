import { useTranslation } from 'react-i18next';

import { RoutePath } from '../../const/router';

export const useDataWithLabelPages = () => {
  const { t } = useTranslation();

  return [
    { link: RoutePath.Main, label: t('mainpagelabelsidebar') },
    { link: RoutePath.Categories, label: t('categories.sidebar.label') },
    { link: RoutePath.Users, label: t('users.sidebar.label') },
  ];
};
