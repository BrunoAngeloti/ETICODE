import { mockBlogs } from "@/mocks/mockBlog";
import { Title } from "./Title";
import { BlogCardHome } from "./BlogCardHome";
import { Blog } from "@/types/Blog";

interface LastPostsProps {
  posts: Blog[];
}

export function LastPosts({ posts }: LastPostsProps){

  const lastPosts = posts?.sort((a, b) => {
    const dateA = new Date(a.createdat);
    const dateB = new Date(b.createdat);

    return dateB.getTime() - dateA.getTime();
  })

  return(
    <div className="w-full flex flex-col gap-5 col-span-3 lg:col-span-2">
      <Title text="Últimos posts" />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
        {lastPosts?.map(post => (
          <BlogCardHome key={post.id} blog={post} />
        ))}
      </div>
    </div>
  )
}