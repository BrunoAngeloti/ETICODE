import { mockBlogs } from "@/mocks/mockBlog";
import { Title } from "./Title";
import { BlogCardHome } from "./BlogCardHome";
import { Blog } from "@/types/Blog";
import { useEffect, useState } from "react";

interface LastPostsProps {
  posts: Blog[];
}

export function LastPosts({ posts }: LastPostsProps){
  const [lastPosts, setLastPosts] = useState<Blog[]>([])

  useEffect(() => {
    const postsAux = posts?.sort((a, b) => {
      const dateA = new Date(a.createdat);
      const dateB = new Date(b.createdat);
  
      return dateB.getTime() - dateA.getTime();
    })

    setLastPosts(postsAux)
  }, [posts])

  return(
    <div className="w-full flex flex-col gap-5 col-span-3 lg:col-span-2">
      <Title text="Últimos posts" />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
        {posts?.map(post => (
          <BlogCardHome key={post.id} blog={post} />
        ))}
      </div>
    </div>
  )
}