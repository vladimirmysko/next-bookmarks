import { Flex } from '@radix-ui/themes'
import { Logo } from '@/components/Logo'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Flex direction="column" align="center" height="100vh" px="4">
      <Flex
        direction="column"
        align="stretch"
        maxWidth="var(--container-3)"
        width="100%"
        flexGrow="1"
      >
        <Flex
          align="center"
          height="calc(64px*var(--scaling))"
          style={{ borderBottom: '1px solid var(--gray-6)' }}
          asChild
        >
          <header>
            <Logo />
          </header>
        </Flex>
        {children}
      </Flex>
    </Flex>
  )
}
