import { useTranslation } from 'react-i18next';

import { RoutePath } from '../../const/router';

export const useDataWithLabelPages = () => {
  const { t } = useTranslation();

  return [
    { link: RoutePath.Main, label: t('mainpagelabelsidebar') },
    { link: RoutePath.Categories, label: t('categoriespagelabelsidebar') },
    { link: RoutePath.Users, label: t('userspagelabelsidebar') },
  ];
};
