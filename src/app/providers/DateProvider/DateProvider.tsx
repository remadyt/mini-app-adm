import type { PropsWithChildren } from 'react';

import { DatesProvider as Dates } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import utc from 'dayjs/plugin/utc';
import i18next from 'i18next';

dayjs.extend(utc);

export const DateProvider = ({ children }: PropsWithChildren) => {
  return <Dates settings={{ locale: i18next.resolvedLanguage }}>{children}</Dates>;
};
