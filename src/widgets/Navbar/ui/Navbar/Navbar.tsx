import { AppRouter } from '@/app/providers/AppRouter';
import { LanguageSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { useDataWithLabelPages } from '@/shared/lib/hooks/useDataWithLabelPages/useDataWithLabelPages';
import { AppShell, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { NavbarFooter } from '../NavbarFooter/NavbarFooter';
import classes from './Navbar.module.css';

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  const dataWithLabelPages = useDataWithLabelPages();

  const links = dataWithLabelPages.map((item) => (
    <NavLink
      to={item.link}
      key={item.label}
      className={({ isActive }) => clsx(classes.link, { [classes.isActiveNavLink]: isActive })}
    >
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 320,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex justify="space-between" align="centert" wrap="wrap">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <ThemeSwitcher />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <div className={classes.navbarMain}>{links}</div>

        <LanguageSwitcher />

        <NavbarFooter />
      </AppShell.Navbar>

      <AppShell.Main>
        <AppRouter />
      </AppShell.Main>
    </AppShell>
  );
};
