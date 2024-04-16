import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Providers from "./query-provider";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "loremIpsum",
  description: "doloratmet",
  // keywords: ["Batik", "Batik HandPainted", "Batik Pekalongan", "Batik Gahara"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppinsFont?.className + " bg-slate-100"}>
        <Providers>
          <Navbar />
          <main className="overflow-x-hidden ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
