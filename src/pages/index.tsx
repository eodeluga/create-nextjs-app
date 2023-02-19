import Head from "next/head";
import pckage from 'package.json';
export default function Home() {
  return (
    <div className="bg-cyan-300">
      <Head>
        <title>{pckage.name}</title>
        <meta name="description" content="Choose your favourite Pokemon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className="text-black p-5 font-bold">Next.js template</p>
      </main>
    </div>
  );
}
