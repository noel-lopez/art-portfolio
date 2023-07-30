import { Inter, Audiowide, B612_Mono, Rubik } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const audioWide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
});

export const b612Mono = B612_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-b612-mono",
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});
