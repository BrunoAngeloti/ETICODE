import Image from "next/image";
import { Button } from "./Button";

export function PlayGame(){
  return(
    <div className="w-full bg-primary-50 flex items-center flex-col lg:flex-row gap-10 font-poppins rounded-md px-6 sm:px-14 py-8 my-10 lg:my-16">
      <Image
        src="/playGameImageLeft.svg"
        alt="Homem sentado com uma pipoca ao lado"
        width={135}
        height={243}
        className="hidden lg:block"
      />
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-1 text-grey-500">
          Teste sua ética
        </h1>

        <p className="text-grey-500 mt-2">
          Quer testar suas convicções éticas? Explore nosso simulador interativo e enfrente dilemas desafiadores. Cada escolha revela um novo aspecto da ética na computação. Está preparado para decidir?
        </p>

        <a 
          href="https://take.quiz-maker.com/QTI15926T"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row gap-4 mt-6 w-full justify-center"
        >
          <Button title="Testar agora!" onPress={() => {}} />
        </a>
      </div>
      <Image
        src="/playGameImageRight.svg"
        alt="Mulher sentada com uma pizza ao lado"
        width={135}
        height={243}
        className="hidden lg:block"
      />
    </div>
  )
}