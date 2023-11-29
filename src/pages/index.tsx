import { Hero } from "@/components/Hero";
import { LastPosts } from "@/components/LastPosts";
import { PlayGame } from "@/components/PlayGame";
import { PopularPosts } from "@/components/PopularPosts";
import { PopularTags } from "@/components/PopularTags";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <Hero />
        <PopularPosts />
        <PlayGame />
        <div className="w-full grid grid-cols-3 mt-10 gap-20">
          <LastPosts />
          <PopularTags />
        </div>
      </section>
    </main>
  )
}
