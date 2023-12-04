import { mockBlogs } from "@/mocks/mockBlog";
import { Title } from "./Title";
import { BlogCardHome } from "./BlogCardHome";

export function LastPosts(){
  return(
    <div className="w-full flex flex-col gap-5 col-span-3 lg:col-span-2">
      <Title text="Últimos posts" />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
        {mockBlogs.map(blog => (
          <BlogCardHome key={blog.title} blog={blog} />
        ))}
        {mockBlogs.map(blog => (
          <BlogCardHome key={blog.title} blog={blog} />
        ))}
        {mockBlogs.map(blog => (
          <BlogCardHome key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  )
}