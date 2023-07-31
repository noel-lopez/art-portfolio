import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, LinkedinLogo } from "./SocialLogos";

export function ProfileCard() {
  return (
    <div className="after:content relative mb-5 flex h-[550px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-pink-100 px-6 py-16 text-center text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
      <Image
        src="/pfp.webp"
        width={200}
        height={200}
        className="rounded-full"
        alt="Arumxchan's Profile Picture"
      />
      <h1 className="font-audio-wide mt-8 text-lg font-bold tracking-widest uppercase">
        {"⭐ Arumxchan's Portfolio ⭐"}
      </h1>
      <h2 className="font-b612mono text-base font-semibold mb-4">
        {"Digital Artist"}
      </h2>
      <Link
        href="https://www.linkedin.com/in/arumxchan/"
        target="_blank"
        rel="noreferrer"
        className="flex gap-4 items-center justify-center w-full rounded-lg border border-pink-400 bg-pink-400 px-3 py-2 text-xl tracking-widest font-rubik text-white transition hover:bg-pink-500 hover:text-pink-100"
      >
        <LinkedinLogo /> <span>LinkedIn</span>
      </Link>
      <Link
        href="https://www.instagram.com/arumxchan"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center gap-4 items-center w-full rounded-lg border border-pink-400 bg-pink-400 px-3 py-2 text-xl tracking-widest font-rubik text-white transition hover:bg-pink-500 hover:text-pink-100"
      >
        <InstagramLogo />
        <span>Instagram</span>
      </Link>
    </div>
  );
}
