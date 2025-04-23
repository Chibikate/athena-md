// This file is a part of the AthenaMD project.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"; // 👈 Import here

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
      <body className={`${inter.className} min-h-screen`}>
        <ServiceWorkerRegister /> {/* 👈 Add the component here */}
        {children}
      </body>
    </html>
  );
}
