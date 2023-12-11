import { HeadPage } from "@/components/HeadPage";
import { HeroTerm } from "@/components/HeroTerm";

export default function Terms() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeadPage title="Termos de uso" />

      <section className="w-full max-w-7xl px-6 lg:px-10 font-poppins text-left">
        <HeroTerm />

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          1. Elegibilidade para Publicação
        </h2>
        <ul className="text-grey-500 font-medium text-base list-disc list-inside mt-3 gap-2 flex flex-col">
          <li>
            <strong>Usuários Autorizados:</strong> Apenas indivíduos com e-mail da Universidade Federal do Espírito Santo (Ufes) têm permissão para criar e publicar posts na plataforma. Esta medida visa garantir a autenticidade e a relevância do conteúdo compartilhado.
          </li>
          <li>
            <strong>Acesso Público:</strong> Embora a publicação seja restrita a usuários da Ufes, qualquer pessoa pode visualizar o conteúdo disponível na plataforma.
          </li>
        </ul>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          2. Uso Adequado
        </h2>
        <ul className="text-grey-500 font-medium text-base list-disc list-inside mt-3 gap-2 flex flex-col">
          <li>
            <strong>Conteúdo:</strong> Os usuários devem garantir que suas postagens sejam relevantes para os tópicos de ética, moralidade e computação.
          </li>
          <li>
            <strong>Comportamento:</strong> É imperativo manter um ambiente respeitoso e construtivo. Comportamentos abusivos, difamatórios ou discriminatórios não serão tolerados.
          </li>
          <li>
            <strong>Propriedade Intelectual:</strong> Respeite os direitos de propriedade intelectual de terceiros. Não poste conteúdo sem a devida permissão ou crédito.
          </li>
        </ul>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          3. Responsabilidade dos Usuários
        </h2>
        <p className="text-grey-500 font-medium text-base">
          Os usuários são inteiramente responsáveis pelo conteúdo que publicam. A Eticode não se responsabiliza por quaisquer informações postadas pelos usuários.
        </p>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          4. Violações e Sanções
        </h2>
        <p className="text-grey-500 font-medium text-base">
          A violação destes Termos pode resultar em suspensão ou banimento da plataforma. A Eticode reserva-se o direito de remover conteúdo inapropriado ou que viole estes Termos.
        </p>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          5. Modificações nos Termos
        </h2>
        <p className="text-grey-500 font-medium text-base">
          A Eticode pode modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação na plataforma.
        </p>
      </section>
    </main>
  )
}
