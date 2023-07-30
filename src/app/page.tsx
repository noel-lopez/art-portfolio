import { ImageModal } from "@/components/ImageModal";
import { getImages, imagesFolder } from "@/utils/imageUtils";
import Image from "next/image";
import Link from "next/link";

type HomeProps = {
  images: string[];
  searchParams: Record<string, string> | null | undefined;
};

function Home({ images, searchParams }: HomeProps) {
  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        {searchParams?.image && <ImageModal image={searchParams.image} />}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[400px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-pink-200/80 px-6 pb-16 pt-64 text-center text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <h1 className="mt-8 mb-4 text-base font-bold tracking-widest">
              {"Arumxchan's Portfolio"}
            </h1>
            <p className="max-w-[40ch] sm:max-w-[32ch]">
              {
                "Welcome to my art portfolio, where my illustrations blend the enchanting essence of anime aesthetics and adorable coziness. Immerse yourself in a world of cute and colorful paintings! ^^"
              }
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-pink-200 bg-pink-200 px-3 py-2 text-sm font-semibold text-black transition hover:bg-pink-400 hover:text-pink-100 md:mt-4"
              href="https://www.instagram.com/arumxchan"
              target="_blank"
              rel="noreferrer"
            >
              My instagram
            </a>
          </div>
          <ImagesRender images={images} />
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Made with ❤️ by{" "}
        <a
          href="https://www.github.com/noel-lopez"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Noel Lopez
        </a>
        , designed by{" "}
        <a
          href="https://www.instagram.com/arumxchan"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Alma Escamilla
        </a>
      </footer>
    </>
  );
}

function ImagesRender({ images }: { images: string[] }) {
  return (
    <>
      {images.map((image, index) => {
        return (
          <Link
            key={index}
            href={`/?image=${image}`}
            scroll={false}
            shallow
            className="after:content group relative mb-5 block w-full after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              key={index}
              src={imagesFolder + image}
              alt="Arumxchan Art"
              width={500}
              height={500}
              className="transform rounded-lg brightness-100 transition will-change-auto group-hover:brightness-110"
            />
          </Link>
        );
      })}
    </>
  );
}

async function getImagesUrls() {
  const images = getImages();
  return images;
}

type HomePageProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const images = await getImagesUrls();
  return <Home images={images} searchParams={searchParams} />;
}
