import { AppRouter } from '@/app/providers/AppRouter';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Sidebar } from '../../../Sidebar/ui/Sidebar/Sidebar';
import { NavbarHeader } from '../NavbarHeader/NavbarHeader';

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

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
      <NavbarHeader opened={opened} toggle={toggle} />

      <Sidebar />

      <AppShell.Main>
        <AppRouter />
      </AppShell.Main>
    </AppShell>
  );
};
