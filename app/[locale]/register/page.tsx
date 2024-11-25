import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import { RegisterForm } from './form';

export default function SignInPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center sm:bg-neutral-50">
      <Link href="/" className="absolute left-4 top-6 sm:left-6">
        <Logo />
      </Link>

      <RegisterForm className="w-full max-w-md" autoComplete="off" />
    </div>
  );
}
