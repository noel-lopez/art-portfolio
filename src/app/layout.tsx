import "./globals.css";
import type { Metadata } from "next";
import { gluten } from "./fonts";

export const metadata: Metadata = {
  title: "Aruma | Art",
  description: "Aruma Art Portfolio",
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
