'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode((prevState) => !prevState);
  };

  const text = darkMode ? 'Activar modo claro' : 'Activar modo oscuro';

  return (
    <div className="grid">
      <Button color="primary" onClick={handleClick}>
        {text}
      </Button>
      <Button onClick={handleClick}>{text}</Button>
    </div>
  );
}
