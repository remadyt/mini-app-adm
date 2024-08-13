import { useTranslation } from 'react-i18next';

const CategoriesPage = () => {
  const { t } = useTranslation();

  return <div>{t('categoriespage')}</div>;
};

export default CategoriesPage;
