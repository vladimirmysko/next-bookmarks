import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { getCurrentLocale } from '@/locales/server';

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { DecorativeBorders } from '@/components/DecorativeBorders';
import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';

export default async function HomePage() {
  const session = await getSession();

  if (session) {
    return redirect(`/${await getCurrentLocale()}/${session.username}`);
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center sm:bg-neutral-50">
      <main className="relative flex w-full max-w-xl flex-col items-stretch gap-8 bg-white px-4 py-6 sm:px-6">
        <DecorativeBorders />

        <nav className="flex items-baseline justify-between">
          <Logo />
          <Link href="/sign-in">Sign in</Link>
        </nav>

        <section className="flex flex-col items-stretch gap-2">
          <h1 className="text-sm/6 font-semibold text-neutral-950">Next Bookmarks</h1>
          <p className="text-sm/6 text-neutral-500">
            A web app for storing and organizing your favorite websites and color palettes. Designed
            for speed, simplicity, and personal use.
          </p>
        </section>

        <section className="flex flex-col items-stretch gap-2">
          <h2 className="text-sm/6 font-semibold text-neutral-950">About</h2>
          <p className="text-sm/6 text-neutral-500">
            Built with precision and care, Next Bookmarks features a clean interface focused on
            usability. Automatically detects the type of input, enhancing your bookmarks with
            metadata. Fully keyboard-friendly, lightweight, and fast-loading. No distractions.
          </p>
        </section>

        <section className="flex flex-col items-stretch gap-2">
          <h2 className="text-sm/6 font-semibold text-neutral-950">Join</h2>
          <p className="text-sm/6 text-neutral-500">
            Next Bookmarks is open and free for use. However, no feature updates or guaranteed
            support will be provided. The project is lightweight by design, with a minimalistic
            codebase for efficiency.
          </p>
        </section>

        <section className="flex flex-col items-stretch gap-2">
          <h2 className="text-sm/6 font-semibold text-neutral-950">Credits</h2>
          <ul className="flex flex-col items-start [&_a]:text-sm/6">
            <li className="flex flex-col items-start">
              <Link href="https://rauno.me/" target="_blank">
                Rauno Freiberg <ArrowUpRightIcon />
              </Link>
            </li>
            <li className="flex flex-col items-start">
              <Link href="https://bmrks.com/" target="_blank">
                (Basic) Bookmarks <ArrowUpRightIcon />
              </Link>
            </li>
            <li className="flex flex-col items-start">
              <Link href="https://github.com/vladimirmysko/next-bookmarks" target="_blank">
                GitHub repository <ArrowUpRightIcon />
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
