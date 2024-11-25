import { verifySession } from '@/lib/session';

import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Logo } from '@/components/Logo';

export default async function BookmarksPage({
  params,
}: {
  params: Promise<{ username: string; groupId: string }>;
}) {
  const { username, groupId } = await params;
  const session = await verifySession();

  return (
    <div className="flex min-h-screen flex-col items-stretch">
      <header className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-baseline gap-2">
          <Logo />
          <span className="font-semibold text-neutral-400">/</span>
          <Menu>
            <MenuButton className="flex items-center gap-1 text-sm font-medium">
              Bookmarks
              <ChevronUpDownIcon className="size-4 text-neutral-400" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom start"
              className="w-52 origin-top-left rounded-xl border border-neutral-950/5 bg-white p-1 text-sm/6 text-neutral-950 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-neutral-100">
                  Edit
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <div className="text-sm font-medium">{session.username}</div>
      </header>
      <main className="p-4 sm:p-6">
        <h1>Bookmarks</h1>
      </main>
    </div>
  );
}
