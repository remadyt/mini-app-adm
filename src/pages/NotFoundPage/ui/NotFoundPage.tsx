import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div>{t('notfoundpage')}</div>;
};

export default NotFoundPage;
