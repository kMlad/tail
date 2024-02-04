"use client"

import Image from "next/image";
import Head from "next/head";
import laptops from "./data";
import { FeaturesCard } from "@/components/card_with_icon/FeaturesCard";

export default function Laptops() {
  return (
    <>
      <Head>
        <title>TAIL - Laptop Suggestions</title>
        <meta
          name="description"
          content="Explore our laptop suggestions tailored for you."
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
          <h1 className="text-4xl font-bold text-black">Laptop Suggestions</h1>
          <p className="text-xl text-gray-300">Tailored for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {laptops.map((laptop) => (
            <FeaturesCard
              id={laptop.id}
              key={laptop.id}
              name={laptop.name}
              desc={laptop.desc}
              link={laptop.link}
              price={laptop.price}
              imageUrl={laptop.imageUrl}
            />
          ))}
        </div>
      </main>
    </>
  );
}
