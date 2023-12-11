import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-50 w-full flex flex-col items-center font-poppins mt-auto">
      <section className="px-6 lg:px-10 w-full max-w-7xl flex flex-col lg:flex-row py-6 items-center">
          <Link href="/" className="flex flex-row gap-2 py-3">
            <Image
              src="/logoIcon.svg"
              width={50}
              height={45}
              alt="Logo ETICODE"
            />
            <Image
              src="/logoLight.svg"
              width={126}
              height={45}
              alt="Nome ETICODE"
            />
          </Link>

        <nav className="border-l-0 lg:border-l-2 border-primary-300 ml-0 lg:ml-10 pl-0 lg:pl-10 gap-10 flex flex-col mt-4 sm:mt-0 sm:flex-row items-center text-primary-300 font-semibold py-3">
          <Link href="/sobre" passHref className="hover:underline">
            SOBRE NÓS
          </Link>

          <Link href="/sobre" passHref className="hover:underline">
            TERMOS DE USO
          </Link>

          <Link href="/sobre" passHref className="hover:underline">
            POLÍTICA DE PRIVACIDADE
          </Link>
        </nav>
      </section>
    </footer>
  );
}