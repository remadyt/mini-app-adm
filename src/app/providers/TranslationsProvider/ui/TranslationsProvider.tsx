import type { PropsWithChildren } from 'react';

import { I18nextProvider } from 'react-i18next';

import { i18nSettings } from '../config';

export const TranslationsProvider = ({ children }: PropsWithChildren) => {
  return <I18nextProvider i18n={i18nSettings}>{children}</I18nextProvider>;
};
