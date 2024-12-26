import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyAppBar from "@/components/appbar/MyAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top Heroes Tier List",
  description: "Tier List Of Heroes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyAppBar />
        {children}
      </body>
    </html>
  );
}
