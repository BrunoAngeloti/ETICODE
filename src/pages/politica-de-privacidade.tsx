import { HeadPage } from "@/components/HeadPage";
import { HeroPrivacy } from "@/components/HeroPrivacy";

export default function PrivacyPolicy() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeadPage title="Política de privacidade" />

      <section className="w-full max-w-7xl px-6 lg:px-10 font-poppins text-left">
        <HeroPrivacy />

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          1. Coleta de Informações
        </h2>
        <ul className="text-grey-500 font-medium text-base list-disc list-inside mt-3 gap-2 flex flex-col">
          <li>
            <strong>Informações fornecidas pelos usuários:</strong> Coletamos informações pessoais, como nome e endereço de e-mail, dos usuários da Ufes ao se cadastrarem para postar na plataforma.
          </li>
          <li>
            <strong>Dados de uso e acesso:</strong> Também coletamos informações não pessoais, como dados de uso e estatísticas de visualização, para entender como nossa plataforma é utilizada.
          </li>
        </ul>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          2. Uso das Informações
        </h2>
        <ul className="text-grey-500 font-medium text-base list-disc list-inside mt-3 gap-2 flex flex-col">
          <li>
            <strong>Gerenciamento da Plataforma:</strong> Usamos as informações coletadas para gerenciar contas de usuário, moderar conteúdos e garantir a segurança da plataforma.
          </li>
          <li>
            <strong>Melhoria dos Serviços:</strong> As informações de uso nos ajudam a aprimorar e personalizar a experiência na Eticode.
          </li>
        </ul>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          3. Compartilhamento de Informações
        </h2>
        <ul className="text-grey-500 font-medium text-base list-disc list-inside mt-3 gap-2 flex flex-col">
          <li>
            <strong>Privacidade dos usuários:</strong> Não compartilhamos informações pessoais dos usuários com terceiros, exceto quando exigido por lei ou para proteger os direitos e a segurança da plataforma e de seus usuários.
          </li>
          <li>
            <strong>Transparência:</strong> Qualquer compartilhamento de dados será comunicado aos usuários afetados, com a opção de optar por não participar, quando aplicável.
          </li>
        </ul>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          4. Segurança de Dados
        </h2>
        <ul className="text-grey-500 font-medium text-base list-disc list-inside mt-3 gap-2 flex flex-col">
          <li>
            <strong>Proteção de informações:</strong> Empregamos medidas de segurança para proteger contra o acesso não autorizado, alteração, divulgação ou destruição de informações pessoais.
          </li>
          <li>
            <strong>Responsabilidade do usuário:</strong> Os usuários são responsáveis por manter a confidencialidade de suas informações de acesso.
          </li>
        </ul>

        <h2 className="text-2xl text-grey-500 font-bold mt-10">
          5. Alterações na Política de Privacidade
        </h2>
        <ul className="text-grey-500 font-medium text-base list-disc list-inside mt-3 gap-2 flex flex-col">
          <li>
            <strong>Atualizações:</strong> Esta Política de Privacidade pode ser atualizada periodicamente. Qualquer alteração significativa será comunicada aos usuários.
          </li>
        </ul>
      </section>
    </main>
  )
}
