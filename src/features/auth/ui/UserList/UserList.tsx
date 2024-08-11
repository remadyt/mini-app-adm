import { supabaseClient } from '@/shared/api/supabase';
import { Button } from '@mantine/core';
import { useEffect, useState } from 'react';

export const UserList = () => {
  const [isSigOunLoading, setIsSigOunLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsSigOunLoading(true);

      await supabaseClient.auth.signOut();
    } finally {
      setIsSigOunLoading(false);
    }
  };

  // const { t } = useTranslation();
  //
  const getUsers = async () => {
    const { data } = await supabaseClient.from('users').select();

    console.log('response', data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Button loading={isSigOunLoading} onClick={handleLogout}>
        logout
      </Button>
    </div>
  );
};
