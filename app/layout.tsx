import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AthenaMD - Surgical Planning & Learning Platform",
  description: "AthenaMD provides tools and education for reconstruction and surgical planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <header className="sr-only">
          <h1>AthenaMD</h1>
        </header>
        <main>
          {children}
        </main>
        <footer className="sr-only">
          <p>© {new Date().getFullYear()} AthenaMD. All rights reserved.</p>
        </footer>
      </body> 
    </html>
  );
}