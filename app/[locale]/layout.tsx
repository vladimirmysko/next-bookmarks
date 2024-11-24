import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getI18n } from '@/locales/server';
import { cn } from '@/utils/cn';

import { I18nProviderClient } from '@/locales/client';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: 'Next Bookmarks',
    description: t('seo.description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
