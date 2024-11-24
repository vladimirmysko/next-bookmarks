-- DropForeignKey
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_group_id_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_user_id_fkey";

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
