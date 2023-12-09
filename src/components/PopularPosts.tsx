import { mockBlogs } from "@/mocks/mockBlog";
import { Title } from "./Title";
import { BlogCardHome } from "./BlogCardHome";
import { Blog } from "@/types/Blog";

interface PopularPostsProps {
  posts: Blog[];
}

export function PopularPosts({ posts }: PopularPostsProps){
  const popularPosts = posts?.sort((a, b) => b.views - a.views).slice(0, 3);

  return(
    <div className="w-full flex flex-col gap-5 mt-10">
      <Title text="Posts populares" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularPosts?.map(post => (
          <BlogCardHome key={post.id} blog={post} />
        ))}
      </div>
    </div>
  )
}