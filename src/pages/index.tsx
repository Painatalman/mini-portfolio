import { Github as GithubIcon } from '~/components/Icon/Github';
import SpiritualistRandomizer from '~/components/SpiritualistRandomizer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bem-vindo ao website do Miguel Costa</title>
        <meta
          name="description"
          content="Portefólio do tutor, do programador web, do especialista em semântica e documentação técnica, e também do origamista e aspirante a tarólogo Miguel Costa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center flex-col items-center">
        <main className="p-8 flex items-center justify-center flex-col">
          <h1 className="mb-6 text-xs sr-only">Miguel Costa</h1>
          <SpiritualistRandomizer />
        </main>
        <footer className="flex items-center content-center text-xs print:hidden">
          <Link href="https://github.com/painatalman" title="GitHub">
            <GithubIcon />
          </Link>
        </footer>
      </div>
    </>
  );
}
