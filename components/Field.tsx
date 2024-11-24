import { cn } from '@/utils/cn';
import { Field as HeadelssField, type FieldProps } from '@headlessui/react';

export function Field({ className, ...props }: FieldProps) {
  return (
    <HeadelssField className={cn('flex flex-col items-stretch gap-2', className)} {...props} />
  );
}
