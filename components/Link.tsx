import { cn } from '@/utils/cn';

import * as Headless from '@headlessui/react';
import NextLink, { type LinkProps } from 'next/link';

export function Link({ className, ...props }: LinkProps & React.ComponentPropsWithRef<'a'>) {
  return (
    <Headless.DataInteractive>
      <NextLink
        className={cn(
          'text-sm font-medium text-neutral-950 hover:underline',
          'data-[focus]:rounded-sm data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-neutral-400',
          className
        )}
        {...props}
      />
    </Headless.DataInteractive>
  );
}
