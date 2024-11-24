'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { hashPassword } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { createSession } from '@/lib/session';
import { getCurrentLocale } from '@/locales/server';

const credentialsSchema = z
  .object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegisterActionState = {
  errors?: {
    username?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

export async function registerAction(prevState: RegisterActionState, formData: FormData) {
  const validatedFields = credentialsSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, password } = validatedFields.data;

  const user = await prisma.user.findUnique({ where: { username } });
  if (user) {
    return {
      errors: {
        username: ['Username is already taken'],
      },
    };
  }

  const hashedPassword = await hashPassword(password);

  const createdUser = await prisma.user.create({
    data: {
      username,
      hashedPassword,
      groups: {
        create: {
          name: 'Bookmarks',
        },
      },
    },
    include: {
      groups: true,
    },
  });

  await createSession({ id: createdUser.id, username: createdUser.username });

  redirect(`/${await getCurrentLocale()}/${createdUser.username}/${createdUser.groups[0].id}`);
}
