import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AthenaMD",
  description: "To develop mandiweb reconstruction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* inter kay font style and min-h-screen kay ang whole screen na makita sa user */}
      <body className={`${inter.className} min-h-screen`}>{children}</body> 
    </html>
  );
}
