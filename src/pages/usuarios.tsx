import { HeadPage } from "@/components/HeadPage";
import { Title } from "@/components/Title";
import { getTable } from "@/services/table";
import type { User } from "@/types/User";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

interface UsersProps {
  users: User[];
}

export default function Users({ users }: UsersProps) {
  const [search, setSearch] = useState("")

  const renderUsers = (user: User) => {
    return(
      <Link 
        href={`/user/${user.id}`}
        passHref
        className="w-full flex flex-col sm:flex-row gap-4 items-center bg-white hover:shadow-lg px-5 py-4 rounded-md transition-shadow duration-300" 
        key={user.id}
      >
        <Image 
          src={user.photo} 
          alt={user.name} 
          width={64} 
          height={64} 
          className="rounded-full max-h-16" 
          quality={100}
        />
        <div className="flex flex-col gap-0 text-center sm:text-left"> 
          <p className="text-grey-500 font-medium text-xl leading-5">{user.name}</p>     
          <p className="text-grey-300 font-medium text-base">{user.occupation} - {user.institution}</p>
        </div>
      </Link>
    )
  }

  const filteredUsers = users?.filter(user => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  })

  return(
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <HeadPage title="Usuários" />
        
        <div className="flex flex-col justify-between ">
        <Title text="Usuários" />
          
          <div className="relative flex-row items-center bg-primary-100 bg-opacity-20 rounded-lg flex h-full py-3 font-poppins mt-5 w-full">
            <IoMdSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-lg text-gray-400"/>
            <input 
              placeholder="Pesquisar usuário" 
              className="pl-12 border-none outline-none bg-transparent pr-8 w-full"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>      
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {filteredUsers?.map(user => (
            renderUsers(user)
          ))}
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const users = await getTable("User");

  return {
    props: {
      users
    },
  };
}