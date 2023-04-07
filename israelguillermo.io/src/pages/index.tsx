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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
