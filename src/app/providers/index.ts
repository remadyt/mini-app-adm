import { AppRouter } from './AppRouter';
import { DateProvider } from './DateProvider';
import { MantineProvider } from './MantineProvider';
import { ModalsProvider } from './ModalsProvider';
import { TranslationsProvider } from './TranslationsProvider';

export const PROVIDERS = [
  MantineProvider,
  AppRouter,
  ModalsProvider,
  TranslationsProvider,
  DateProvider,
];
