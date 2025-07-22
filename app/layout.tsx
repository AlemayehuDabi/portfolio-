import type { Metadata } from 'next';
import { JetBrains_Mono, Orbitron, VT323 } from 'next/font/google';
import './globals.css';
import NavBar from '@/component/NavBar';
import Footer from '@/component/Footer';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alex',
  description: 'Alex portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
