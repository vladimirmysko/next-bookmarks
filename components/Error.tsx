import { cn } from '@/utils/cn';
import { ExclamationCircleIcon } from '@heroicons/react/16/solid';

export function Error({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'flex items-start gap-2 text-sm font-medium text-red-600',
        'selection:bg-red-100 selection:text-red-600',
        className
      )}
      {...props}
    >
      <ExclamationCircleIcon className="mt-0.5 size-4" />
      {children}
    </span>
  );
}
