import { Blog } from "@/types/Blog"
import Image from "next/image"
import { Tag } from "./Tag"

import { MdPerson } from "react-icons/md";

interface BlogCardHomeProps {
  blog: Blog
}

export function BlogCardHome({ blog }: BlogCardHomeProps){
  return(
    <div className="flex flex-col w-full relative">
      <Image 
        src={blog.coverImage} 
        alt={blog.title} 
        width={520}
        height={375}
        className="rounded-sm mb-1 w-full" 
      />

      <div className="flex flex-row gap-2 items-center mt-2 flex-wrap">
        {blog.tags.map(tag => (
          <Tag key={tag.tag} tag={tag} />
        ))}
      </div>
      
      <h1 className="text-xl font-bold text-grey-500 my-2 font-inter line-clamp-2 leading-6">{blog.title}</h1>
      <p className="text-sm font-medium text-grey-300 font-inter line-clamp-2 leading-5">{blog.description}</p>

      

      <div className="flex flex-row items-center mt-2">
        <MdPerson className="inline-block text-grey-500 mr-2" size={20} />
        <p className="text-grey-500 font-inter font-semibold">{blog.authorName}</p>
      </div>  
    </div>
  )
}