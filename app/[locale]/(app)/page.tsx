import { Flex, Heading, Text } from '@radix-ui/themes'
import { Link } from '@/components/Link'

export default function HomePage() {
  return (
    <Flex direction="column" align="center" flexGrow="1">
      <Flex direction="column" align="center" gap="6" m="auto">
        <Flex direction="column" align="center" gap="2">
          <Heading>All Your Bookmarks in One Place</Heading>
          <Text size="2" color="gray">
            Keep your favorite links organized, accessible, and clutter-free.
          </Text>
        </Flex>
        <Flex align="baseline" gap="9">
          <Link href="#" size="2" color="gray" underline="hover" highContrast>
            Sign in
          </Link>
          <Link href="#" size="2" color="gray" underline="hover" highContrast>
            Register
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
