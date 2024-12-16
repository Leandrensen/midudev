'use client';

export default function Button({
  children,
  color,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}>) {
  const colors =
    color === 'primary'
      ? 'bg-gradient-to-r from-great-blue-900 to-great-blue-400 dark:from-great-blue-400 dark:to-great-blue-200 text-white dark:text-black'
      : 'bg-gradient-to-r from-red-900 to-red-400 dark:from-red-400 dark:to-red-200 text-white dark:text-black';

  return (
    <button
      onClick={onClick}
      //   className=""
      className={`${colors} px-4 py-2 rounded shadow-md focus:ring hover:bg-great-blue-500 transition-all active:transform active:translate-y-1`}
    >
      {children}
    </button>
  );
}
