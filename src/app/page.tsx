import { ImageModal } from "@/components/ImageModal";
import { ProfileCard } from "@/components/ProfileCard";
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
      <main className="mx-auto max-w-[1960px] p-4 font-gluten">
        {searchParams?.image && <ImageModal image={searchParams.image} />}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <ProfileCard />
          <ImagesRender images={images} />
        </div>
      </main>
      <footer className="font-gluten font-light p-6 text-center text-white/90 sm:p-12 selection:bg-purple-300 selection:text-black">
        Made with 💜 by{" "}
        <a
          href="https://www.github.com/noel-lopez"
          target="_blank"
          className="font-medium hover:text-purple-300"
          rel="noreferrer"
        >
          Noel Lopez
        </a>
        , illustrations by{" "}
        <a
          href="https://www.instagram.com/Aruma"
          target="_blank"
          className="font-medium hover:text-purple-300"
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
              alt="Aruma Art"
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
