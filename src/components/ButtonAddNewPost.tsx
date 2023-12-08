import { FaPlus } from "react-icons/fa";
import Link from "next/link"

export function ButtonAddNewPost(){
  return(
    <Link 
      href="/novo-post"
      passHref
      title="Criar novo post"
      className="fixed right-4 bottom-4 flex items-center justify-center p-3 rounded-full bg-primary-500 text-neutral-50 hover:bg-primary-600 transition-all"
    >
      <FaPlus size={20} />
    </Link>
  )
}