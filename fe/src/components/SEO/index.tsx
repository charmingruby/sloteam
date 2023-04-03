import Head from 'next/head';

interface SEOProps {
  isIndex?: boolean
  message?: string
}

export function SEO({ isIndex = false, message }: SEOProps) {
  const titleData = isIndex ? 'Sloteam' : `Sloteam | ${message}`;

  return (
    <Head>
      <title>{titleData}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
