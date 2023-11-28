import { Hero } from "@/components/Hero";
import { PlayGame } from "@/components/PlayGame";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-10">
        <Hero />
        <PlayGame />
      </section>
    </main>
  )
}
