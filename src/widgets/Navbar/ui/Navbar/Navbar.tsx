import { AppRouter } from '@/app/providers/AppRouter';
import { dataWithLabelPages } from '@/shared/lib/const/dataWithLabelPages';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { NavbarFooter } from '../NavbarFooter/NavbarFooter';
import classes from './Navbar.module.css';

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  const links = dataWithLabelPages.map((item) => (
    <NavLink
      to={item.link}
      key={item.label}
      className={({ isActive }) => clsx(classes.link, { [classes.isActive]: isActive })}
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
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <div className={classes.navbarMain}>{links}</div>

        <NavbarFooter />
      </AppShell.Navbar>

      <AppShell.Main>
        <AppRouter />
      </AppShell.Main>
    </AppShell>
  );
};
