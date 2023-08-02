import "./globals.css";
import type { Metadata } from "next";
import { gluten } from "./fonts";

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
      <body className={`${gluten.variable}`}>{children}</body>
    </html>
  );
}
