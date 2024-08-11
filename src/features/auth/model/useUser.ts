import { supabaseClient } from '@/shared/api/supabase';
import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    supabaseClient.auth.getUser().then((user) => {
      setUser(user.data?.user || null);

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session?.user || null);
      }

      if (event === 'SIGNED_OUT') {
        setUser(null);
      }

      setLoading(false);
    });
  }, []);

  return { user, loading };
};
