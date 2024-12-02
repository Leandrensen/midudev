import React from 'react';
import { Button } from '@nextui-org/react';
import { logIn, signUp } from './actions';

export default function LoginPage() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="grid place-content-center min-h-screen">
      <h1>Inicia sesión en Twitter Clon</h1>
      <form className="grid place-content-center min-h-screen">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <section className="flex flex-row justify-between pt-2">
          <Button type="submit" formAction={logIn}>
            Log in
          </Button>
          <Button type="submit" formAction={signUp}>
            Sign up
          </Button>
        </section>
      </form>
    </main>
  );
}
