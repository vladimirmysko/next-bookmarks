import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import { SignInForm } from './form';

export default function SignInPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center sm:bg-neutral-50">
      <Link href="/" className="absolute left-4 top-6 sm:left-6">
        <Logo />
      </Link>

      <SignInForm className="w-full max-w-md" />
    </div>
  );
}
