'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { verifyPassword } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getCurrentLocale } from '@/locales/server';

const credentialsSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type SignInActionState = {
  errors?: {
    username?: string[];
    password?: string[];
  };
};

export async function signInAction(prevState: SignInActionState, formData: FormData) {
  const { username, password } = credentialsSchema.parse(Object.fromEntries(formData));

  const user = await prisma.user.findUnique({ where: { username }, include: { groups: true } });
  if (!user) {
    return {
      errors: {
        username: ['User not found'],
      },
    };
  }

  const passwordMatch = await verifyPassword(password, user.hashedPassword);
  if (!passwordMatch) {
    return {
      errors: {
        password: ['Incorrect password'],
      },
    };
  }

  redirect(`/${await getCurrentLocale()}/${user.username}/${user.groups[0].id}`);
}
