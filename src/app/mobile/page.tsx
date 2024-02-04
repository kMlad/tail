"use client"

import Image from "next/image";
import Head from "next/head";
import mobiles from "./data"
import { FeaturesCard } from "@/components/card_with_icon/FeaturesCard";

export default function Mobiles() {

  return (
    <>
      <Head>
        <title>TAIL - Mobile Suggestions</title>
        <meta
          name="description"
          content="Explore our mobile suggestions tailored for you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
        <a href="/">
          <a>
            <Image
              src="/logo.svg"
              alt="TAIL Logo"
              width={200}
              height={100}
              priority
            />
          </a>
        </a>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">
            Mobile Phones Suggestions
          </h1>
          <p className="text-xl text-gray-300">Tailored for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mobiles.map((mobile) => (
            <FeaturesCard
              id={mobile.id}
              key={mobile.id}
              name={mobile.name}
              desc={mobile.desc}
              link={mobile.link}
              price={mobile.price}
              imageUrl={mobile.imageUrl}
            />
          ))}
        </div>
      </main>
    </>
  );
}
