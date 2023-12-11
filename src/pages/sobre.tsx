import { HeadPage } from "@/components/HeadPage";
import { HeroAbout } from "@/components/HeroAbout";
import Image from "next/image";

export default function About() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeadPage title="Sobre" />
      <section className="w-full max-w-7xl px-6 lg:px-10 font-poppins text-justify">
        <HeroAbout />
        <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row gap-8 mt-10">
          <Image  
            src="/ufes.png"
            alt="Logo da UFES"
            width={490}
            height={213}
            className="rounded-lg"
          />

          <p className="text-grey-500 font-medium">
            Nosso espaço digital foi pensado para ser um fórum dedicado à reflexão e compartilhamento de ideias sobre temas essenciais que encontram na interseção entre a ética, moralidade e computação. Este blog é uma iniciativa conjunta de professores e alunos da Universidade Federal do Espírito Santo (Ufes), criando um ambiente colaborativo que promove o diálogo e o enriquecimento mútuo.
            Através deste projeto, buscamos abordar questões contemporâneas que desafiam os paradigmas tradicionais, incentivando uma análise crítica sobre como a computação pode ser alinhada com valores éticos e morais. Ao reunir diferentes perspectivas e experiências, tanto acadêmicas quanto práticas, nossa comunidade se esforça para desenvolver um entendimento mais amplo sobre o papel da tecnologia no mundo moderno. Nossa missão é não apenas educar, mas também inspirar uma nova geração de pensadores e profissionais que valorizem a importância da responsabilidade ética na era digital.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8 mt-14">
          <p className="text-grey-500 font-medium">
            Na era digital em que vivemos, a interação entre a tecnologia e as questões éticas tornou-se fundamental. Nossa comunidade acadêmica está comprometida em explorar as complexidades que surgem quando a inovação tecnológica se encontra com considerações morais e sociais. Aqui, você encontrará reflexões e análises elaboradas por membros da Ufes, abordando tópicos que variam desde os desafios éticos na inteligência artificial até questões cruciais de segurança cibernética.
          </p>

          <Image
            src="/logoIconFull.svg"
            width={200}
            height={45}
            alt="Logo ETICODE"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:flex-row-reverse gap-8 mt-14">
          <p className="text-grey-500 font-medium">
            Este blog é um espaço colaborativo voltado para a comunidade da UFES, tanto profissionais quanto estudantes. Incentivamos a partilha de ideias e experiências sobre ética na computação, segurança cibernética e dilemas morais na era digital. Aqui, você pode expressar seus insights, aprender com os demais e contribuir para um rico diálogo. Este é o lugar ideal para quem é apaixonado por tecnologia e ética. Convidamos você a juntar-se a nós nesta emocionante jornada de conhecimento e descoberta, onde exploramos juntos os desafios e oportunidades do mundo digital, sempre com um olhar crítico e reflexivo. Este é o lugar ideal para quem busca não apenas compreender, mas também moldar o futuro da tecnologia de maneira consciente e ética.
          </p>
          <Image  
            src="/aboutus.svg"
            alt="Mulher sentada mexendo no computador e um monitor com um blog aberto"
            width={536}
            height={266}
          />         
        </div>

        <p className="text-grey-500 font-medium mt-10 mb-10">
          Junte-se a nós enquanto exploramos as interconexões fascinantes entre a tecnologia e a ética, dando voz a diversas perspectivas e contribuindo para um entendimento mais profundo das questões que moldam o nosso mundo digital.
        </p>
      </section>
    </main>
  )
}
