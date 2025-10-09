import type {Metadata} from 'next';
import './globals.css';
import { PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'RoadShip - Your Logistics Partner',
  description: 'Reliable and efficient logistics solutions for your business.',
  keywords: 'logistics, shipping, transport, cargo, india, booking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased', ptSans.variable)}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
