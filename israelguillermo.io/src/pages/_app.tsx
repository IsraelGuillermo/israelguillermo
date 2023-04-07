import AppNavBar from '@/components/AppNavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppNavBar />
      <Component {...pageProps} />
    </>
  );
}
