'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { createClient } from '../../../../utils/supabase/client';

const SignOutButton = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      router.push('/error');
    }

    router.refresh();
    router.push('/');
  };

  return (
    <header>
      <Button onClick={handleSignOut}>Cerrar Sesión</Button>
    </header>
  );
};

export default SignOutButton;
