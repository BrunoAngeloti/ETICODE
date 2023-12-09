import { HeadPage } from "@/components/HeadPage";
import { Hero } from "@/components/Hero";
import { LastPosts } from "@/components/LastPosts";
import { PlayGame } from "@/components/PlayGame";
import { PopularPosts } from "@/components/PopularPosts";
import { PopularTags } from "@/components/PopularTags";
import { getTable } from "@/services/table";
import { Blog } from "@/types/Blog";

interface HomeProps {
  posts: Blog[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <HeadPage />
        <Hero />
        <PopularPosts posts={posts} />
        <PlayGame />
        <div className="w-full grid grid-cols-3 mt-10 gap-10">
          <LastPosts posts={posts}/>
          <PopularTags />
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const posts = await getTable("Post") as Blog[];

  return {
    props: {
      posts
    },
  };
}