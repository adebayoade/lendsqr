import type { Metadata } from 'next';
import './globals.css';
import './style.scss';
import { Suspense } from 'react';
import Spinner from '@/components/ui/Spinner';
import TopLoader from '@/components/ui/TopLoader';

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
      <body>
        <TopLoader />
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </body>
    </html>
  );
}
