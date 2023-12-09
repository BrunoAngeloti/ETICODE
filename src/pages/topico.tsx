import { BlogCardHome } from "@/components/BlogCardHome";
import { HeadPage } from "@/components/HeadPage";
import { Title } from "@/components/Title";
import { getTable } from "@/services/table";
import type { Blog } from "@/types/Blog";
import Image from "next/image";

interface TopicProps {
  posts: Blog[];
  tag: string;
}

export default function Topic({ posts, tag }: TopicProps) {
  const renderEmptyTags = () => {
    return(
      <div className="flex flex-col-reverse gap-5 mt-8 items-center">
        <Image src="/emptyPosts.svg" width={400} height={400} alt="Escritor sem saber o que escrever" className="mt-10" />
        <p className="text-center text-xl font-poppins font-medium">
          Parece que ainda não temos nenhum post sobre esse tópico :(
        </p>
      </div>
    )
  }

  const renderPosts = () => {
    return(
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {posts?.map(post => (
          <BlogCardHome key={post.id} blog={post} />
        ))}
      </div>
    )
  }

  const thereIsPosts = posts.length !== 0;

  return(
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <HeadPage title={tag} />
        <Title text={`Posts sobre ${tag}`} />

        {thereIsPosts ? renderPosts() : renderEmptyTags()}
      </section>
    </main>
  )
}

export async function getServerSideProps(context: any) {
  const tag = context.query.tag;

  const posts = await getTable("Post") as Blog[];

  const filteredPosts = posts.filter((post) => {
    return post.tags.includes(tag);
  });

  return {
    props: {
      tag,
      posts: filteredPosts
    },
  };
}