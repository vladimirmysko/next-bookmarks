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
import { Spinner } from '@/components/Spinner';

import { RegisterActionState, registerAction } from './actions';

export function RegisterForm({
  className,
  ...props
}: Omit<
  React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'children' | 'action'
>) {
  const initialState: RegisterActionState = {};
  const [state, formAction, isPending] = useActionState(registerAction, initialState);

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
        <h1 className="text-xl font-semibold text-neutral-950">Register</h1>
        <p className="text-sm text-neutral-500 [&_a]:inline-block">
          Already have an account? <Link href="/sign-in">Sign in.</Link>
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
        <Field>
          <Label>Confirm password</Label>
          <InputGroup>
            <LockClosedIcon />
            <Input name="confirmPassword" type="password" placeholder="••••••••" required />
          </InputGroup>
          {state?.errors?.confirmPassword ? <Error>{state.errors.confirmPassword[0]}</Error> : null}
        </Field>
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? (
          <>
            <Spinner />
            <span>Registering...</span>
          </>
        ) : (
          'Register'
        )}
      </Button>
    </form>
  );
}
