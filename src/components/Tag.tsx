import type { Tag } from "@/types/Blog"
import { getTagColor } from "@/utils/colors"

interface TagProps {
  tag: Tag
}

export function Tag({ tag }: TagProps){
  const color = getTagColor(tag)

  return(
    <div className={`inline-block ${color} text-white px-4 py-1 rounded-2xl text-xs font-inter`}>
      {tag.tag}
    </div>
  )
}