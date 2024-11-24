import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getI18n } from '@/locales/server';
import { cn } from '@/utils/cn';

import { I18nProviderClient } from '@/locales/client';
import { NuqsAdapter } from 'nuqs/adapters/next';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: 'variable',
  axes: ['opsz'],
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
        className={cn(
          inter.variable,
          'bg-white font-sans text-neutral-950 antialiased',
          'selection:bg-neutral-950/10 selection:text-neutral-950'
        )}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        <I18nProviderClient locale={locale}>
          <NuqsAdapter>{children}</NuqsAdapter>
        </I18nProviderClient>
      </body>
    </html>
  );
}
