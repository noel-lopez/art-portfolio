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
      <Image
        src={imagesFolder + image}
        alt="Arumxchan Art"
        width={650}
        height={800}
        sizes="40vw"
      />
    </Link>
  );
}
