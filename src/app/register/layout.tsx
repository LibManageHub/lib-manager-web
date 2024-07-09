import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register to Lib manager",
  description: "A simple library manager. Register to access the library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
