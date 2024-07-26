import { useTranslation } from 'react-i18next';

import classes from './App.module.css';

export const App = () => {
  const { t } = useTranslation();

  return <div className={classes.container}>{t('common.app')}</div>;
};
