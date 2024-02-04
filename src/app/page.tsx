"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
        <div className="flex justify-center w-full">
          <Image
            src="/logo.svg"
            alt="TAIL Logo"
            width={200}
            height={100}
            priority
          />
        </div>
        <p className="text-2xl text-gray-800 mt-4">
          your AI shopping assistant
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link
            className="rounded bg-blue-500 px-8 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none"
            href="/laptops"
          >
            {"I'd like to buy a laptop"}
          </Link>
          <Link
            className="rounded bg-green-600 px-8 py-2 text-white transition duration-300 ease-in-out hover:bg-green-700 focus:outline-none"
            href="/mobile"
          >
            {"I'd like to buy a mobile phone"}
          </Link>
        </div>
      </main>
    </>
  );
}
