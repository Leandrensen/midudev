import React from 'react';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { AuthButtonServer } from './components/AuthButtonServer';
import { Providers } from './providers';

import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clon de Twitter',
  description: 'Generado moviendo las manitas',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <header className="flex-row justify-between p-5 border-b border-white/20">
            <AuthButtonServer />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
