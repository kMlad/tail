import Image from 'next/image';
import Head from 'next/head';

export default function Laptops() {
  // Mock data for the laptops, this should ideally come from a server or API
  const laptops = [
    {
      id: 'hp17',
      name: 'HP 17 Laptop, 17.3”',
      price: '$420.00',
      imageUrl: '/laptops/images/hp_17.jpg',
      link: 'https://www.amazon.com/HP-Display-i3-1125G4-Processor-Windows/dp/B0C3RPLW47/ref=sr_1_16?qid=1707021645&refinements=p_36%3A2421886011&s=pc&sr=1-16&th=1'
    },
    {
      id: 'acerAspire',
      name: 'Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6"',
      price: '$308.00',
      imageUrl: '/laptops/images/acer_aspire.jpg',
      link: 'https://www.amazon.com/A315-24P-R7VH-Display-Quad-Core-Processor-Graphics/dp/B0BS4BP8FB/ref=sr_1_1?qid=1707021645&refinements=p_36%3A2421886011&s=pc&sr=1-1'
    },
    {
      id: 'hpChromebook',
      name: 'HP 2023 Newest Chromebook Laptop',
      price: '$189.00',
      imageUrl: '/laptops/images/hp_2013.jpg',
      link: 'https://www.amazon.com/HP-Chromebook-Processor-Graphics-Bluetooth/dp/B0C7MR5RDH/ref=sr_1_4?qid=1707021645&refinements=p_36%3A2421886011&s=pc&sr=1-4&th=1'
    },
    {
      id: 'hpTouchFlagship',
      name: 'HP 15.6" Touchscreen Flagship',
      price: '$469.00',
      imageUrl: '/laptops/images/touchscreen_flagship.jpg',
      link: 'https://www.amazon.com/HP-Touchscreen-i3-1115G4-i5-1035G4-Accessories/dp/B0CHDJSVW8/ref=sr_1_9?crid=23O4LBR77ISVS&keywords=flagship%2Btouch&qid=1707022709&refinements=p_36%3A15000-50000&rnid=2941120011&s=pc&sprefix=flagship%2Btouch%2Caps%2C212&sr=1-9&th=1'
    },
  ];

  return (
    <>
      <Head>
        <title>TAIL - Laptop Suggestions</title>
        <meta name="description" content="Explore our laptop suggestions tailored for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <a href="/">
          <a>
            <Image src="/logo.svg" alt="TAIL Logo" width={200} height={100} priority />
          </a>
        </a>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">Laptop Suggestions</h1>
          <p className="text-xl text-gray-300">Tailored for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {laptops.map((laptop) => (
            <a href={laptop.link} key={laptop.id} target="_blank" rel="noopener noreferrer" className="bg-gray-400 p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <Image src={laptop.imageUrl} alt={laptop.name} width={150} height={100} className="mx-auto" />
              <h3 className="text-lg text-white">{laptop.name}</h3>
              <p className="text-lg text-white">{laptop.price}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
