import { Blog } from "@/types/Blog"
import Image from "next/image"
import { Tag } from "./Tag"
import { convertDate } from "@/utils/time"
import Link from "next/link"
import { FaEye } from "react-icons/fa"

interface BlogCardUserProps {
  blog: Blog
}

export function BlogCardUser({ blog }: BlogCardUserProps){
  return(
    <Link 
      href={`/post/${blog.id}`}
      className="flex flex-col-reverse md:flex-row w-full relative font-inter bg-white rounded-md overflow-hidden gap-2 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col px-5 py-4">
        <h1 className="text-lg font-bold text-grey-500 line-clamp-2 leading-6">{blog.title}</h1>
        <p className="text-sm font-medium text-grey-300 font-inter line-clamp-2 leading-5 mt-1 mb-5">{blog.description}</p> 

        <div className="flex flex-row items-center mt-auto">
          <div className="flex flex-row gap-2 items-center flex-wrap">
            {blog.tags.map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <p className="text-grey-200 font-medium text-sm ml-auto">{convertDate(blog.createdat)}</p>
        </div>
      </div>

      <div className="relative w-full md:w-48 h-48 md:h-full overflow-hidden min-w-[150px]">
        <Image 
          src={blog.coverImage} 
          alt={blog.title} 
          fill
          quality={100}
          className="object-cover" 
          loading="eager"
        />
        <span className="absolute top-2 right-2 flex flex-row items-center justify-center gap-1 ml-auto bg-white px-2 py-1 rounded-full">
          <FaEye className="text-grey-500" size={12} />
          <p className="text-grey-500 font-inter font-semibold text-xs">{blog.views}</p>
        </span>
      </div> 
    </Link>
  )
}