import { cn } from '@/utils/cn';
import { Button as HeadelssButton, type ButtonProps } from '@headlessui/react';

export function Button({ className, ...props }: ButtonProps) {
  return (
    <HeadelssButton
      className={cn(
        'flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-base font-medium transition duration-100 data-[active]:scale-[0.98] sm:text-sm',
        'select-none bg-neutral-950 text-white data-[hover]:bg-neutral-800',
        'data-[focus]:outline-2 data-[focus]:outline-offset-[3px] data-[focus]:outline-neutral-400',
        'data-[disabled]:bg-neutral-300 data-[disabled]:text-neutral-500',
        className
      )}
      {...props}
    />
  );
}
