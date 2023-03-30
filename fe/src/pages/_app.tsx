import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} font-default`}>
      <Component {...pageProps} />
    </main>
  );
}
