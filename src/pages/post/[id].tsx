import { getTable } from "@/services/table";
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
          <p className="text-grey-200 font-medium text-base">{convertDate(post.createdat)}</p>
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

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const post = await getTable("Post", id);

  if (!post) {
    return {
      notFound: true,
    };
  }


  return {
    props: {
      post: post[0],
    },
  };
}