import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anderson Moz | Desenvolvedor Full Stack",
  description:
    "Portfólio de Anderson Moz, desenvolvedor Full Stack com foco em Next.js, Node.js, TypeScript e soluções de software orientadas a problemas reais.",
  keywords: [
    "Anderson Moz",
    "Desenvolvedor Full Stack",
    "Next.js",
    "Node.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Supabase",
  ],
  authors: [{ name: "Anderson Moz" }],
  creator: "Anderson Moz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}