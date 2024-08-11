import { supabaseClient } from '@/shared/api/supabase';
import { Button } from '@mantine/core';

import classes from './NavbarFooter.module.css';

export const NavbarFooter = () => {
  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
  };

  return (
    <div className={classes.footer}>
      <Button className={classes.link} onClick={handleLogout}>
        logout
      </Button>
    </div>
  );
};
