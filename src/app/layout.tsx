import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Lib manager",
  description: "A simple library manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
        <ToastContainer />
      </body>
    </html>
  );
}
