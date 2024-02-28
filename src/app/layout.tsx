import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './style.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lendsqr | Empowering the smartest lenders',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
