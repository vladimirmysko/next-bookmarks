export default async function BookmarksPage({
  params,
}: {
  params: Promise<{ username: string; groupId: string }>;
}) {
  const { username, groupId } = await params;

  return (
    <div>
      <span>{username}</span>
      <span>{groupId}</span>
    </div>
  );
}
