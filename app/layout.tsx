import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderBlock from "./routes/HeaderBlock";
import FontsAPI from "./routes/FontsAPI";
import FooterBlock from "./routes/FooterBlock";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Kirill's Website",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FontsAPI />
      <body className={inter.className}>
        <HeaderBlock />
        {children}
        <div style={{ minHeight: "4em" }} />
        <FooterBlock />
      </body>
    </html>
  );
}
