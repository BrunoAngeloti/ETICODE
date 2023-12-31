import { Blog } from "@/types/Blog"
import Image from "next/image"
import { Tag } from "./Tag"

import { MdPerson } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

interface BlogCardHomeProps {
  blog: Blog
}

export function BlogCardHome({ blog }: BlogCardHomeProps){
  return(
    <Link 
      href={`/post/${blog.id}`}
      passHref
      className="flex flex-col w-full relative bg-white rounded-md overflow-hidden hover:shadow-lg cursor-pointer transition-shadow duration-300"
    >
      <div className="relative w-full h-56 mb-1">
        <Image 
          src={blog.coverImage} 
          alt={blog.title} 
          fill
          quality={100}
          className="rounded-sm object-cover" 
        />      
      </div>
      
      <div className="flex flex-col px-4 py-3">
        <div className="flex flex-row gap-2 items-center flex-wrap">
          {blog.tags.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        
        <h1 className="text-xl font-bold text-grey-500 my-2 font-inter line-clamp-2 leading-6">{blog.title}</h1>
        <p className="text-sm font-medium text-grey-300 font-inter line-clamp-2 leading-5">{blog.description}</p>

        <div className="flex flex-row items-center mt-2">
          <MdPerson className="inline-block text-grey-500 mr-2" size={20} />
          <p className="text-grey-500 font-inter font-semibold truncate mr-2">{blog.authorName}</p>

          <span className="flex flex-row items-center justify-center gap-1 ml-auto">
            <FaEye className="text-grey-500" size={16} />
            <p className="text-grey-500 font-inter font-semibold">{blog.views}</p>
          </span>
        </div> 
      </div> 
    </Link>
  )
}