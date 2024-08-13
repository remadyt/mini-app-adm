import { supabaseClient } from '@/shared/api/supabase';
import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import classes from './NavbarFooter.module.css';

export const NavbarFooter = () => {
  const { t } = useTranslation();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
  };

  return (
    <div className={classes.footer}>
      <Button className={classes.link} onClick={handleLogout}>
        {t('logout')}
      </Button>
    </div>
  );
};
