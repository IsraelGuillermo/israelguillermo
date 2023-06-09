import Head from 'next/head';
import HomePage from './homepage';
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
        <meta property='og:title' content='Israel Guillermo' />
        <meta property='og:image' content='/website.png' />
        <meta property='og:url' content='https://israelguillermo.vercel.app/' />
        <meta property='og:type' content='website' />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
