export function DecorativeBorders() {
  return (
    <>
      <div className="absolute left-1/2 top-0 hidden h-px w-svw -translate-x-1/2 border-b border-dashed border-neutral-200 sm:block" />
      <div className="absolute bottom-0 left-1/2 hidden h-px w-svw -translate-x-1/2 border-b border-dashed border-neutral-200 sm:block" />
      <div className="absolute left-0 top-1/2 hidden h-svh w-px -translate-y-1/2 border-r border-dashed border-neutral-200 sm:block" />
      <div className="absolute right-0 top-1/2 hidden h-svh w-px -translate-y-1/2 border-r border-dashed border-neutral-200 sm:block" />
    </>
  );
}
