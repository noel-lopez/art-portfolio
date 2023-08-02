import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, LinkedinLogo } from "./SocialLogos";

export function ProfileCard() {
  return (
    <div className="after:content relative mb-5 flex h-[550px] flex-col items-center justify-end gap-3 overflow-hidden rounded-lg bg-pink-100 px-6 py-16 text-center text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
      <Image
        src="/pfp.webp"
        width={200}
        height={200}
        className="rounded-full"
        alt="Arumxchan's Profile Picture"
      />
      <h1 className="mt-8 text-2xl font-bold uppercase selection:bg-pink-500 selection:text-white">
        {"Arumxchan's Portfolio"}
      </h1>
      <h2 className="text-xl font-semibold mb-4 selection:bg-pink-500 selection:text-white">
        <span className="text-sm">⭐</span>
        {" Digital Artist "}
        <span className="text-sm">⭐</span>
      </h2>
      <Link
        href="https://www.linkedin.com/in/arumxchan/"
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 items-center justify-center w-full rounded-lg border border-pink-400 bg-pink-400 px-3 py-0.5 text-xl tracking-widest text-white transition hover:bg-pink-500 hover:text-pink-100"
      >
        <LinkedinLogo />
        <span>LinkedIn</span>
      </Link>
      <Link
        href="https://www.instagram.com/arumxchan"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center gap-2 items-center w-full rounded-lg border border-pink-400 bg-pink-400 px-3 py-0.5 text-xl tracking-widest text-white transition hover:bg-pink-500 hover:text-pink-100"
      >
        <InstagramLogo />
        <span>Instagram</span>
      </Link>
    </div>
  );
}
