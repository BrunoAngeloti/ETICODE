import Image from "next/image";
import { Button } from "./Button";

export function Hero(){
  return(
    <div className="w-full bg-primary-50 flex items-center flex-col lg:flex-row pt-6 lg:pt-12 gap-6 font-poppins rounded-md z-10">
      <div className="px-6 lg:px-0 lg:pl-14 pb-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-1 text-grey-500">COMPARTILHE <span className="text-primary-500">HISTÓRIAS</span></h1>
        <h1 className="text-2xl sm:text-4xl font-semibold text-grey-500"><span className="text-primary-500">INSPIRE</span> MUDANÇAS</h1>

        <p className="text-grey-500 mt-2">
          Ética e moral no universo da computação. Descubra, discuta e desenvolva perspectivas sobre a tecnologia responsável.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 ">
          <Button title="Saiba mais" onPress={() => {}} />
          <Button title="Criar uma conta" onPress={() => {}} variant="outlined"/>
        </div>
      </div>
      <Image
        src="/heroImage.svg"
        alt="3 pessoas sentadas em uma mesa trabalhando"
        width={470}
        height={300}
      />
    </div>
  )
}