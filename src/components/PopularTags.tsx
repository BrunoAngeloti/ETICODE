import { Title } from "./Title";
import { tags } from "@/utils/tags";
import { Tag } from "./Tag";

export function PopularTags(){
  return(
    <div className="w-full flex flex-col gap-5">
      <Title text="Tópicos populares" />

      <div className="w-full flex flex-row flex-wrap gap-4 gap-y-3">
        {tags.map(tag => (
          <Tag key={tag} tag={tag} textSize="text-base" clickable/>
        ))}
      </div>
    </div>
  )
}