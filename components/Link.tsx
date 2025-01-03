'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import NextLink from 'next/link'
import { Link as RadixLink } from '@radix-ui/themes'

type LinkProps = ComponentPropsWithoutRef<typeof RadixLink> & {
  href: string
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, ...props }, ref) => {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <RadixLink ref={ref} {...props} />
      </NextLink>
    )
  }
)

Link.displayName = 'Link'

export { Link }
