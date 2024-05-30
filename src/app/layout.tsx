import type { Metadata } from "next";
import { Nerko_One } from "next/font/google";
import "./globals.css";

const inter = Nerko_One({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "PabloPay",
  description: "Aventureiro, historiador esse é o nosso futuro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
