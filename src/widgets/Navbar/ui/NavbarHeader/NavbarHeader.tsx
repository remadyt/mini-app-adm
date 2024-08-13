import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppShell, Burger, Flex } from '@mantine/core';

interface NavbarHeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const NavbarHeader = (props: NavbarHeaderProps): JSX.Element => {
  const { opened, toggle } = props;

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
