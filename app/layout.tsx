// This file is a part of the AthenaMD project.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"; // 👈 Import Service Worker

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AthenaMD - Learning Platform", // Updated title for clarity
  description: "Explore AthenaMD's learning platform for surgical planning and 3D printing.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Set the language attribute */}
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Add a favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Responsive meta tag */}
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <ServiceWorkerRegister /> {/* Register the service worker */}
        {children} {/* Render the page content */}
      </body>
    </html>
  );
}