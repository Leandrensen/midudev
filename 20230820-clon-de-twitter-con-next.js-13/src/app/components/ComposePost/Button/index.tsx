'use client';

import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function ComposePostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end"
    >
      {pending ? `Posteando...` : `Postear`}
    </button>
  );
}
