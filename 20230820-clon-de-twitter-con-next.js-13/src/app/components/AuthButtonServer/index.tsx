import React from 'react';
import { createClient } from '../../../../utils/supabase/server';
import AuthButton from '../AuthButtonClient';

export async function AuthButtonServer() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AuthButton user={user} />;
}
