import { HeadPage } from "@/components/HeadPage";
import { Hero } from "@/components/Hero";
import { LastPosts } from "@/components/LastPosts";
import { PlayGame } from "@/components/PlayGame";
import { PopularPosts } from "@/components/PopularPosts";
import { PopularTags } from "@/components/PopularTags";
import { Users } from "@/components/Users";

import { getTable } from "@/services/table";

import type { Blog } from "@/types/Blog";
import type { User } from "@/types/User";

interface HomeProps {
  posts: Blog[];
  users: User[];
}

export default function Home({ posts, users }: HomeProps) {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <HeadPage />
        <Hero />
        <PopularPosts posts={posts} />
        <PlayGame />
        <div className="w-full flex-col-reverse flex lg:grid grid-cols-3 mt-10 gap-10">
          <LastPosts posts={posts}/>
          <div className="col-span-1">
            <PopularTags />
            <Users users={users}/>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const posts = await getTable("Post") as Blog[];
  const users = await getTable("User");

  return {
    props: {
      posts,
      users
    },
  };
}