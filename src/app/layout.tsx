"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <button onClick={() => setState(state + 1)}>Click Saya</button>
        <p>Layout: {state}</p>
        {children}
      </body>
    </html>
  );
}
