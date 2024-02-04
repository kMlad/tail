import Image from 'next/image';
import Head from 'next/head';

export default function Mobiles() {
  // Mock data for the mobiles, this should ideally come from a server or API
  const mobiles = [
    {
      id: 'sams23',
      name: 'SAMSUNG Galaxy S23 FE Cell Phone, 128GB',
      price: '$598.22',
      imageUrl: '/mobiles/images/samsungGalaxys23.jpg',
      link: 'https://www.amazon.com/SAMSUNG-Unlocked-Android-Smartphone-Processor/dp/B0CD99XXQY/ref=sr_1_1?crid=1643NAIZ5N64J&keywords=iphone%2B15&qid=1707023638&refinements=p_n_feature_nine_browse-bin%3A23732468011&rnid=4972967011&s=wireless&sprefix=iphone%2B1%2Caps%2C217&sr=1-1&th=1'
    },
    {
      id: 'onePlus',
      name: 'OnePlus Open, 16GB RAM+512GB"',
      price: '$1,699.99',
      imageUrl: '/mobiles/images/onePlus.jpg',
      link: 'https://www.amazon.com/OnePlus-Dual-SIM-Unlocked-Smartphone-Hasselblad/dp/B0CHN8FNW3/ref=sr_1_2?crid=1643NAIZ5N64J&keywords=iphone%2B15&qid=1707023638&refinements=p_n_feature_nine_browse-bin%3A23732468011&rnid=4972967011&s=wireless&sprefix=iphone%2B1%2Caps%2C217&sr=1-2&th=1'
    },
    {
      id: 'apple',
      name: 'Apple iPhone 12 Pro Max, 256GB, Pacific Blue',
      price: '$600.99',
      imageUrl: '/mobiles/images/iphone.jpg',
      link: 'https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFFG8D7/ref=sr_1_1?crid=1PNU4HJ3AVLBY&keywords=iphone%2B15%2Bpro%2Bmax&qid=1707023971&refinements=p_36%3A14674878011&rnid=14674871011&s=wireless&sprefix=iphone%2B15%2Caps%2C185&sr=1-1&th=1'
    },
    {
      id: 'motorolaRazr',
      name: 'Motorola razr+ | 2023 Magenta',
      price: '$699.99',
      imageUrl: '/mobiles/images/motRazr.jpg',
      link: 'https://www.amazon.com/Motorola-Unlocked-MPCamera-Magenta-73-95x170-83x6-99mm/dp/B0C2X3SVK6/ref=pd_ci_mcx_di_int_sccai_cn_d_sccl_2_7/141-6273484-0410203?pd_rd_w=6UV53&content-id=amzn1.sym.751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_p=751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_r=9S06DXYYCKZQSEPVM35S&pd_rd_wg=PPfAN&pd_rd_r=d5695edb-0a28-42e6-8baa-52ed0f0386ac&pd_rd_i=B0C2X3SVK6&th=1'
    },
  ];

  return (
    <>
      <Head>
        <title>TAIL - Mobile Suggestions</title>
        <meta name="description" content="Explore our mobile suggestions tailored for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <a href="/">
          <a>
            <Image src="/logo.svg" alt="TAIL Logo" width={200} height={100} priority />
          </a>
        </a>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">Mobile Phones Suggestions</h1>
          <p className="text-xl text-gray-300">Tailored for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mobiles.map((mobile) => (
            <a href={mobile.link} key={mobile.id} target="_blank" rel="noopener noreferrer" className="bg-gray-400 p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <Image src={mobile.imageUrl} alt={mobile.name} width={150} height={100} className="mx-auto" />
              <h3 className="text-lg text-white">{mobile.name}</h3>
              <p className="text-lg text-white">{mobile.price}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
