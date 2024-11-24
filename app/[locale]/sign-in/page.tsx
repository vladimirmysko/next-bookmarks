import { UserCircleIcon, LockClosedIcon } from '@heroicons/react/16/solid';
import { DecorativeBorders } from '@/components/DecorativeBorders';
import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import { Field } from '@/components/Field';
import { Label } from '@/components/Label';
import { InputGroup, Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function SignInPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center sm:bg-neutral-50">
      <Link href="/" className="absolute left-4 top-6 sm:left-6">
        <Logo />
      </Link>

      <form
        action=""
        className="relative flex w-full max-w-md flex-col items-stretch gap-8 bg-white p-4 sm:p-6"
      >
        <DecorativeBorders />

        <div className="flex flex-col items-stretch gap-1">
          <h1 className="text-xl font-semibold text-neutral-950">Sign in</h1>
          <p className="text-sm text-neutral-500 [&_a]:inline-block">
            Don't have an account? <Link href="/register">Register.</Link>
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-4">
          <Field>
            <Label>Username</Label>
            <InputGroup>
              <UserCircleIcon />
              <Input name="username" placeholder="john.doe" required autoFocus />
            </InputGroup>
          </Field>
          <Field>
            <Label>Password</Label>
            <InputGroup>
              <LockClosedIcon />
              <Input name="password" type="password" placeholder="••••••••" required />
            </InputGroup>
          </Field>
        </div>

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}
