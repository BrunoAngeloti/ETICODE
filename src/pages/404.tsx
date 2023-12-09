import { HeadPage } from "@/components/HeadPage";
import Image from "next/image";

export default function Error404(){
  return(
    <main className="w-full flex flex-col items-center">
      <section className="w-full max-w-7xl px-6 lg:px-10 flex flex-col items-center">
        <HeadPage title="Página não encontrada" />
        
        <Image src="/404.svg" width={600} height={400} alt="Página não encontrada" className="mt-10" />

        <p className="text-center text-2xl font-poppins font-medium mt-20">
          Ops... parece que essa página não existe
        </p>
      </section>
    </main>
  )
}