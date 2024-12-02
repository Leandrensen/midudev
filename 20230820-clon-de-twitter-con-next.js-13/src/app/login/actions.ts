'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Provider } from '@supabase/supabase-js';

import { createClient } from '../../../utils/supabase/server';

export async function logIn(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function oAuthSignUp(oAuthProvider: Provider, redirectTo: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider: oAuthProvider,
    options: {
      redirectTo,
    },
  });

  if (error) {
    redirect('/error');
  }
}
