import { mockBlogs } from "@/mocks/mockBlog";
import { Blog } from "@/types/Blog";
import { convertDate } from "@/utils/time";
import Image from "next/image";

interface PostProps {
  post: Blog;
}

export default function Post({ post }: PostProps) {
  return (
    <main className="w-full flex flex-col items-center mt-14 font-inter">
      <section className="w-full max-w-5xl px-6 lg:px-10">
        <h1 className="text-grey-500 font-bold text-5xl">{post.title}</h1>
        <h2 className="text-grey-300 font-medium text-lg mt-3 leading-6">{post.description}</h2>

        <div className="flex flex-row w-full items-center justify-between mt-8">
          <div className="flex flex-row gap-3 items-center">
            <Image src={post.authorImage} alt={post.authorName} width={40} height={40} className="rounded-full" />
            <p className="text-grey-500 font-medium text-base">{post.authorName}</p>
          </div>
          <p className="text-grey-200 font-medium text-base">{convertDate(post.createdAt)}</p>
        </div>

        <Image src={post.coverImage} alt={post.title} width={1024} height={800} quality={100} className="rounded-lg my-8" />

        <div
          className="output font-inter"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  // Aqui, criamos um número limitado de IDs mockados. 
  // Você pode ajustar este número conforme a necessidade.
  const ids = ['1', '2', '3', '4', '5'];

  // Criamos os caminhos (paths) com esses IDs.
  // adicionar todos os ids nesse path
  const paths = ids.map(id => ({
    params: { id },
  }));

  return {
    paths,
    fallback: 'blocking', // ou 'true' se você quiser carregar os dados no lado do cliente
  };
}


export async function getStaticProps({ params }: any) {
  //pesquisa post pelo id e retorna ele
  const mockBlog = {
    ...mockBlogs[1],
  };

  if (false) {
    return { notFound: true };
  }

  return {
    props: {
      post: mockBlog,
    },
    revalidate: 60,
  };
}
