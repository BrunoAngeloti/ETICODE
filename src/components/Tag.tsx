import type { Tag } from "@/types/Blog"
import { getTagColor } from "@/utils/colors"
import Link from "next/link"

interface TagProps {
  tag: Tag
  textSize?: string
  clickable?: boolean
}

export function Tag({ tag, textSize, clickable }: TagProps){
  const color = getTagColor(tag)
  const text = textSize ?? 'text-xs'
  const isClickable = "hover:shadow-xl transition-shadow duration-300" ?? ""

  const renderTag = () => {
    return(
      <div className={`inline-block ${color} ${text} ${isClickable} text-white px-4 py-1 rounded-2xl font-inter`}>
        {tag}
      </div>
    )
  }

  if(clickable){
    return(
      <Link href={`/topico?tag=${tag}`}>
        {renderTag()}
      </Link>
    )
  }

  return(
    renderTag()
  )
}