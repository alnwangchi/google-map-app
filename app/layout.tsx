import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Allen Jamie are good',
  description: 'oh ho ho'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
