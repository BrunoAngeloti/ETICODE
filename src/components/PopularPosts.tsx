import { mockBlogs } from "@/mocks/mockBlog";
import { Title } from "./Title";
import { BlogCardHome } from "./BlogCardHome";

export function PopularPosts(){
  return(
    <div className="w-full flex flex-col gap-5 mt-10">
      <Title text="Posts populares" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {mockBlogs.map(blog => (
          <BlogCardHome key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  )
}