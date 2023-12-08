import type { Tag } from "@/types/Blog"
import { getTagColor } from "@/utils/colors"

interface TagProps {
  tag: Tag
  textSize?: string
}

export function Tag({ tag, textSize }: TagProps){
  const color = getTagColor(tag)
  const text = textSize ?? 'text-xs'

  return(
    <div className={`inline-block ${color} ${text} text-white px-4 py-1 rounded-2xl font-inter`}>
      {tag}
    </div>
  )
}