import Link from "next/link";
import Image from "next/image";
import { imagesFolder } from "@/utils/imageUtils";

type Props = {
  image: string;
};

export function ImageModal({ image }: Props) {
  return (
    <Link
      href="/"
      scroll={false}
      className="fixed inset-0 z-10 w-full h-full bg-black bg-opacity-50 flex justify-center items-center cursor-auto"
    >
      <picture className="relative h-[90vh] w-[90vw]">
        <Image
          src={imagesFolder + image}
          alt="Aruma Art"
          layout="fill"
          objectFit="contain"
          sizes="100vw"
        />
      </picture>
    </Link>
  );
}
