import Head from 'next/head';
import { HomePage } from './homepage';
export default function Home() {
  return (
    <>
      <Head>
        <title>Israel Guillermo</title>
        <meta name='description' content='Personal Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
