import { cn } from '@/utils/cn';
import { Label as HeadelssLabel, type LabelProps } from '@headlessui/react';

export function Label({ className, ...props }: LabelProps) {
  return (
    <HeadelssLabel className={cn('text-sm font-medium text-neutral-950', className)} {...props} />
  );
}
