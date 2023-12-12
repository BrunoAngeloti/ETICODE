import Image from "next/image";
import { Button } from "./Button";
import { useRouter } from "next/router";

export function HeroTerm(){
  const route = useRouter();

  return(
    <div className="w-full bg-primary-50 flex items-center flex-col lg:flex-row pt-6 lg:pt-12 gap-6 font-poppins rounded-md z-10">
      <div className="px-6 lg:px-0 lg:pl-14 pb-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-1 text-grey-500">TERMOS DE USO</h1>

        <p className="text-grey-500 mt-2">
          Bem-vindo à Eticode, uma plataforma inovadora que promove a interseção entre ética e computação. Estes Termos de Uso regem sua interação com a plataforma e o uso de seus recursos.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full justify-center lg:justify-start">     
          <Button title="Sobre nós" onPress={() => route.push("/sobre")} />
          <Button title="Ver posts" onPress={() => route.push("/posts")} variant="outlined" />
        </div>
      </div>
      <Image
        src="/terms.svg"
        alt="3 pessoas segurando 2 engranagens"
        width={320}
        height={300}
        className="mr-5 mb-5"
      />
    </div>
  )
}