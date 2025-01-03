import { Text, Flex } from '@radix-ui/themes'
import type { FlexProps } from '@radix-ui/themes'

export function Logo(props: FlexProps) {
  return (
    <Flex align="baseline" gap="1" {...props}>
      <Text
        weight="bold"
        style={{ fontVariationSettings: '"opsz" 32', letterSpacing: '-0.01em' }}
      >
        Bookmarks
      </Text>
      <Text
        size="1"
        color="gray"
        style={{ fontFamily: 'var(--em-font-family)', fontStyle: 'italic' }}
      >
        v0.0.1
      </Text>
    </Flex>
  )
}
