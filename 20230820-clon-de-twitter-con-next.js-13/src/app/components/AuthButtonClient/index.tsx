'use client';

import React from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '../../../../utils/supabase/client';
import { GitHubIcon } from './icons';
import SignOutButton from '../SignOutButton';

const AuthButton = ({ user }: { user: User | null }) => {
  const supabase = createClient();
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  };

  return (
    <header>
      {user === null ? (
        <button
          type="button"
          className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 me-2 mb-2"
          onClick={handleSignIn}
        >
          <GitHubIcon />
          Iniciar sesión con Github
        </button>
      ) : (
        <SignOutButton />
      )}
    </header>
  );
};

export default AuthButton;
