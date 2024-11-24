import { cn } from '@/utils/cn';
import { Input as HeadelssInput, type InputProps } from '@headlessui/react';

export function Input({ className, ...props }: InputProps) {
  return (
    <HeadelssInput
      className={cn(
        'h-10 rounded-lg border border-neutral-200 text-base text-neutral-950 outline-none transition duration-100 placeholder:text-neutral-400 sm:text-sm',
        'hover:border-neutral-300',
        'focus:border-neutral-400 focus:ring focus:ring-neutral-950/10',
        className
      )}
      {...props}
    />
  );
}

export function InputGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-stretch',
        '[&>[data-slot=icon]]:pointer-events-none [&>[data-slot=icon]]:absolute [&>[data-slot=icon]]:top-1/2 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:-translate-y-1/2 [&>[data-slot=icon]]:text-neutral-400',
        '[&>[data-slot=icon]:first-child]:left-3',
        '[&_input]:has-[[data-slot=icon]:first-child]:pl-9',
        className
      )}
      {...props}
    />
  );
}
