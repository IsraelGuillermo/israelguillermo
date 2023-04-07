import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import AppNavBar from '@/components/AppNavBar';
import { HomePage } from './homepage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Israel Guillermo</title>
        <meta name='description' content='Personal Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <AppNavBar />
        <HomePage />
      </main>
    </>
  );
}
