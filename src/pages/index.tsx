import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link"
type ToolCardProps = {
  name: string;
  description: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Utilities</title>
        <meta name="description" content="Web Utilities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Everyday <span className="text-blue-700">Web</span> Tools
        </h1>
        <p className="text-2xl text-gray-700">Tools:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <Link href='/qrgenerator'>
            <a>
              <ToolCard
                name="QR Generator"
                description="No Bullshit QR Codes"
              />
            </a>
          </Link>
          <ToolCard
            name="Coming Soon"
            description="..."
          />
        </div>
      </main>
    </>
  );
};

const ToolCard = ({
  name,
  description,
}: ToolCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </section>
  );
};

export default Home;
