import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { getCurrentLocale } from '@/locales/server';

export default async function UsernamePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;

  const user = await prisma.user.findUnique({ where: { username }, include: { groups: true } });

  if (!user) {
    redirect(`/${await getCurrentLocale()}/register`);
  }

  redirect(`/${await getCurrentLocale()}/${user.username}/${user.groups[0].id}`);
}
