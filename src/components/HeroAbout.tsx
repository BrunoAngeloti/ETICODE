import Image from "next/image";
import { Button } from "./Button";
import { useState } from "react";
import { LoginModal } from "./modals/LoginModal";
import { SignUpModal } from "./modals/SignUpModal";
import { SignUpFormModal } from "./modals/SignUpFormModal";

export function HeroAbout(){
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isSignUpFormModalOpen, setSignUpFormModalOpen] = useState(false);

  return(
    <div className="w-full bg-primary-50 flex items-center flex-col lg:flex-row pt-6 lg:pt-12 gap-6 font-poppins rounded-md z-10">
      <div className="px-6 lg:px-0 lg:pl-14 pb-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-1 text-grey-500">SOBRE A PLATAFORMA</h1>

        <p className="text-grey-500 mt-2">
          Nossa plataforma explora a interseção entre ética e computação, reunindo uma comunidade para compartilhar, debater e aprender. Oferecemos discussões enriquecedoras, recursos educativos e um simulador de dilemas éticos, visando inspirar reflexão e crescimento no mundo digital.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full justify-center lg:justify-start">     
          <Button title="Criar uma conta" onPress={() => setSignUpModalOpen(true)} />
          <Button title="Entrar" onPress={() => setLoginModalOpen(true)} variant="outlined" />
        </div>
      </div>
      <Image
        src="/heroAboutImage.svg"
        alt="4 pessoas de etinias diferentes"
        width={470}
        height={300}
      />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
        setSignUpModalOpen={setSignUpModalOpen}
      />
      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={() => setSignUpModalOpen(false)} 
        setLoginModalOpen={setLoginModalOpen}
        handleSignUp={() => {
          setSignUpModalOpen(false);
          setSignUpFormModalOpen(true);
        }}
      />
      <SignUpFormModal 
        isOpen={isSignUpFormModalOpen} 
        onClose={() => setSignUpFormModalOpen(false)} 
      />
    </div>
  )
}