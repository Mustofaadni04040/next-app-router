import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-gray-800">
      <nav className="container w-full mx-auto flex items-center justify-between py-2 px-5">
        <h1 className="text-white">Navbar</h1>

        <ul className="flex items-center gap-10">
          <Link href="/">
            <li className="text-slate-300 cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-slate-300 cursor-pointer">About</li>
          </Link>
          <Link href="/about/profile">
            <li className="text-slate-300 cursor-pointer">Profile</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
