import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>TAIL - Your AI Shopping Assistant</title>
        <meta name="description" content="Find the best products for work, home, or personal use with TAIL, your AI shopping assistant." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
        <div className="flex justify-center w-full">
          <Image src="/logo.svg" alt="TAIL Logo" width={200} height={100} priority />
        </div>
        <p className="text-2xl text-gray-800 mt-4">your AI shopping assistant</p>
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/laptops">
            <button className="rounded bg-blue-500 px-8 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none">
              Laptops
            </button>
          </Link>
          <Link href="/mobile">
            <button className="rounded bg-green-600 px-8 py-2 text-white transition duration-300 ease-in-out hover:bg-green-700 focus:outline-none">
              Mobile Phones
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
