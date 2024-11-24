'use client';

import React, { useActionState } from 'react';
import { useQueryState } from 'nuqs';
import { cn } from '@/utils/cn';

import { UserCircleIcon, LockClosedIcon } from '@heroicons/react/16/solid';
import { DecorativeBorders } from '@/components/DecorativeBorders';
import { Link } from '@/components/Link';
import { Field } from '@/components/Field';
import { Label } from '@/components/Label';
import { InputGroup, Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Error } from '@/components/Error';

import { SignInActionState, signInAction } from './actions';

export function SignInForm({
  className,
  ...props
}: Omit<
  React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'children' | 'action'
>) {
  const initialState: SignInActionState = {};
  const [state, formAction, isPending] = useActionState(signInAction, initialState);

  const [username, setUsername] = useQueryState('username', {
    defaultValue: '',
    clearOnDefault: true,
  });

  return (
    <form
      action={formAction}
      className={cn('relative flex flex-col items-stretch gap-8 bg-white p-4 sm:p-6', className)}
      {...props}
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
            <Input
              name="username"
              placeholder="john.doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </InputGroup>
          {state?.errors?.username ? <Error>{state.errors.username[0]}</Error> : null}
        </Field>
        <Field>
          <Label>Password</Label>
          <InputGroup>
            <LockClosedIcon />
            <Input name="password" type="password" placeholder="••••••••" required />
          </InputGroup>
          {state?.errors?.password ? <Error>{state.errors.password[0]}</Error> : null}
        </Field>
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  );
}
