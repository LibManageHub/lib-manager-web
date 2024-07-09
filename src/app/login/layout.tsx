import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Lib manager",
  description: "A simple library manager. Login to access the library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
