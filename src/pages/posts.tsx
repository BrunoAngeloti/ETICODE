import { BlogCardHome } from "@/components/BlogCardHome";
import { HeadPage } from "@/components/HeadPage";
import { Title } from "@/components/Title";
import { getTable } from "@/services/table";
import type { Blog } from "@/types/Blog";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

interface UsersProps {
  posts: Blog[];
}

export default function Posts({ posts }: UsersProps) {
  const [search, setSearch] = useState("")

  const filteredUsers = posts?.filter(post => {
    return post.title.toLowerCase().includes(search.toLowerCase()) || 
            post.description.toLowerCase().includes(search.toLowerCase()) ||
              post.authorName.toLowerCase().includes(search.toLowerCase())
  })

  return(
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <HeadPage title="Posts" />
        
        <div className="flex flex-col justify-between ">
        <Title text="Posts" />
          
          <div className="relative flex-row items-center bg-primary-100 bg-opacity-20 rounded-lg flex h-full py-3 font-poppins mt-5 w-full">
            <IoMdSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-lg text-gray-400"/>
            <input 
              placeholder="Pesquisar postagem" 
              className="pl-12 border-none outline-none bg-transparent pr-8 w-full"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>      
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-5">
          {filteredUsers?.map(user => (
            <BlogCardHome key={user.id} blog={user} />
          ))}
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const posts = await getTable("Post") as Blog[];

  const postsAux = posts?.sort((a, b) => {
    const dateA = new Date(a.createdat);
    const dateB = new Date(b.createdat);

    return dateB.getTime() - dateA.getTime();
  })

  return {
    props: {
      posts: postsAux,
    },
  };
}