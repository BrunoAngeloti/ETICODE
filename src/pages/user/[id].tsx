import { HeaderPerfilPage } from "@/components/HeaderPerfilPage";
import { mockUser } from "@/mocks/mockUser";
import type { User } from "@/types/User";

interface UserProps {
  user: User;
}

export default function Post({ user }: UserProps) {
  return (
    <main className="w-full flex flex-col items-center mt-8 font-inter">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <HeaderPerfilPage user={user} />

        <div className="w-full h-[2px] bg-secondary-100 mt-8"></div>


      </section>
    </main>
  );
}

export async function getStaticPaths() {
  // Aqui, criamos um número limitado de IDs mockados. 
  // Você pode ajustar este número conforme a necessidade.
  const ids = ['1', '2', '3', '4', '5'];

  // Criamos os caminhos (paths) com esses IDs.
  const paths = ids.map(id => ({
    params: { id },
  }));

  return {
    paths,
    fallback: 'blocking', // ou 'true' se você quiser carregar os dados no lado do cliente
  };
}


export async function getStaticProps({ params }: any) {
  if (false) {
    return { notFound: true };
  }

  return {
    props: {
      user: mockUser,
    },
    revalidate: 60,
  };
}
