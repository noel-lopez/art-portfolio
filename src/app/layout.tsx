import "./globals.css";
import type { Metadata } from "next";
import { inter, audioWide, b612Mono, rubik } from "./fonts";

export const metadata: Metadata = {
  title: "Arumxchan | Art",
  description: "Arumxchan Art Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${audioWide.variable} ${b612Mono.variable} ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
