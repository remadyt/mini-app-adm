import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppShell, Burger, Flex } from '@mantine/core';

interface NavbarHeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const NavbarHeader = ({ opened, toggle }: NavbarHeaderProps): JSX.Element => {
  return (
    <>
      <AppShell.Header>
        <Flex justify="space-between" align="centert" wrap="wrap">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <ThemeSwitcher />
        </Flex>
      </AppShell.Header>
    </>
  );
};
