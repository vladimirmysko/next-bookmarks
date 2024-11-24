import { cn } from '@/utils/cn';

export function Spinner({
  className,
  ...props
}: Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>) {
  return (
    <div className={cn('relative size-4 text-current', className)} data-slot="icon" {...props}>
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[0deg] animate-spinner-leaf-fade [animation-delay:calc(-8/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[45deg] animate-spinner-leaf-fade [animation-delay:calc(-7/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[90deg] animate-spinner-leaf-fade [animation-delay:calc(-6/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[135deg] animate-spinner-leaf-fade [animation-delay:calc(-5/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[180deg] animate-spinner-leaf-fade [animation-delay:calc(-4/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[225deg] animate-spinner-leaf-fade [animation-delay:calc(-3/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[270deg] animate-spinner-leaf-fade [animation-delay:calc(-2/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
      <span
        className={cn(
          'absolute left-[calc(50%-12.5%/2)] top-0 h-full w-[12.5%] rotate-[315deg] animate-spinner-leaf-fade [animation-delay:calc(-1/8*800ms)]',
          "before:block before:h-[30%] before:w-full before:rounded-full before:bg-current before:[content:'']"
        )}
      />
    </div>
  );
}
