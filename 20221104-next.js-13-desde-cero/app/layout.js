import Navigation from '../components/Navigation';
import { font } from './font.js';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body className={font.className}>
        {/* <body className={font.variable}> */}
        {/* <body> */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
