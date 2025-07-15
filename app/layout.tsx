import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DigiCraft Ajans - Dijital Dünyanızı Dönüştürün',
  description: 'Modern web tasarımları, SEO optimizasyonu, logo tasarım ve sosyal medya yönetimi hizmetleriyle dijital dönüşüm yolculuğunuzda yanınızdayız.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}