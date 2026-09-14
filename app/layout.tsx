import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'استديو روح | Studio Rooh Kids',
  description: 'جلسات تصوير أطفال وثيمات مميزة وحجز مواعيد بسهولة.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
