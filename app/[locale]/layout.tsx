import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { getScopedI18n } from '@/locales/server'

import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: 'variable',
  axes: ['opsz'],
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('seo')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html
      lang={locale}
      style={{ scrollBehavior: 'smooth' }}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable}`}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme
            accentColor="gray"
            grayColor="gray"
            radius="medium"
            scaling="100%"
            panelBackground="solid"
          >
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}
