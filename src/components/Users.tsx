import { Title } from "./Title";
import Link from "next/link";
import type { User } from "@/types/User";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface UsersProps {
  users: User[];
}

export function Users({ users }: UsersProps){
  const limitedUsers = users?.slice(0, 10)

  const renderUsers = (user: User) => {
    return(
      <Link
        href={`/user/${user.id}`}
        className="flex flex-row gap-3 items-center"
        key={user.id}
      >
        <Image 
          src={user.photo} 
          alt={user.name} 
          width={32} 
          height={32} 
          className="rounded-full" 
          quality={100}
        />
        <p className="text-grey-500 font-medium text-base">{user.name}</p>            
      </Link>
    )
  }
  return(
    <div className="w-full flex flex-col mt-4">
      <Title text="Nossos usuários" />

      <div className="w-full flex flex-col gap-3 mt-5">
        {limitedUsers?.map(user => (
          renderUsers(user)
        ))}
      </div>

      <Link href="/usuarios" passHref className="flex flex-row gap-2 items-center w-fit mt-3">
        <span className="text-primary-500 font-medium text-base">Ver todos</span>
        <BsArrowRight />
      </Link>
    </div>
  )
}