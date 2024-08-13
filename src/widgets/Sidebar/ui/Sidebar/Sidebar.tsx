import { LanguageSwitcher } from '@/features/LangSwitcher';
import { useDataWithLabelPages } from '@/shared/lib/hooks/useDataWithLabelPages/useDataWithLabelPages';
import { AppShell } from '@mantine/core';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { NavbarFooter } from '../../../Navbar/ui/NavbarFooter/NavbarFooter';
import classes from './Sidebar.module.css';

export const Sidebar = () => {
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
    <>
      <AppShell.Navbar p="md">
        <div className={classes.navbarMain}>{links}</div>

        <LanguageSwitcher />

        <NavbarFooter />
      </AppShell.Navbar>
    </>
  );
};
