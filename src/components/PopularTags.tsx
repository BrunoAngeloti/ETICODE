import { mockBlogs } from "@/mocks/mockBlog";
import { Title } from "./Title";
import { BlogCardHome } from "./BlogCardHome";
import { tags } from "@/utils/tags";
import { Tag } from "./Tag";

export function PopularTags(){
  return(
    <div className="w-full hidden lg:flex flex-col gap-5 col-span-1">
      <Title text="Tópicos populares" />

      <div className="w-full flex flex-row flex-wrap gap-4 gap-y-3">
        {tags.map(tag => (
          <Tag key={tag} tag={tag} textSize="text-base" />
        ))}
      </div>
    </div>
  )
}