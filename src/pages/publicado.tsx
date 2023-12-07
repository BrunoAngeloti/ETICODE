import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'; // Importe o Router do Next.js

import Confetti from 'react-confetti'

export default function Published(){
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [timer, setTimer] = useState(10); // Estado para o timer
  const confetiRef = useRef<HTMLElement | null>(null);
  const route = useRouter()
  const id = route.query.id;

  useEffect(() => {
    if (id === undefined) {
      route.push('/');
    }
  }, [id, route]);

  useEffect(() => {
    const updateDimensions = () => {
      if (confetiRef?.current === null) return;
      setHeight(confetiRef.current.clientHeight);
      setWidth(confetiRef.current.clientWidth);
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdown);
          route.push(`/post/${id}`);
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearInterval(countdown); 
    };
  }, []);

  return(
    <div 
      ref={confetiRef as any}
      className="flex flex-col items-center font-poppins overflow-hidden max-h-screen"
    >
      <Confetti numberOfPieces={250} width={width} height={height} recycle={false}/>

      <Image
        src="/thanks.svg"
        width={500}
        height={390}
        alt="3 pessoas segurando um coração cada uma"
        className="mt-12 w-[300px] 2xl:w-[500px]"
      />


      <div className="flex flex-col text-center items-center w-full max-w-7xl h-full px-10 mt-5">
        <h1 className="text-4xl font-bold text-grey-500">
          Seu post foi publicado!
        </h1>
        <span className="text-xl mt-2 text-grey-400 mb-12">
          Ficamos felizes pela sua colaboração com nosso projeto! <br /> Agora você pode ver seu post na página de posts.
        </span>
        <span className="text-xl text-grey-500 mb-4">
          Você será redirecionado para seu post em {timer} segundos.
        </span>
      </div>
    </div>
  )
}