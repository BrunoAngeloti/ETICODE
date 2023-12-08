import Head from "next/head";

interface HeadProps {
  title?: string;
}

export function HeadPage({ title }: HeadProps) {
  return (
    <Head>
      <title>{title ? `ETICODE | ${title}` : "ETICODE"}</title>
      <meta name="description" content="Blog sobre tecnologia" />
    </Head>
  );
}