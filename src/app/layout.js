import './globals.css';
import { Karla } from 'next/font/google';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const karla = Karla({
  subsets: ['latin-ext'],
  weights: [300, 400, 700],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
