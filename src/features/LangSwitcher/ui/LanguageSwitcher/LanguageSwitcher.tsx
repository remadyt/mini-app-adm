import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return <Button onClick={onToggleLanguage}>{t('language')}</Button>;
};
