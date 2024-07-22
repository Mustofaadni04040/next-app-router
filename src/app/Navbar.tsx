import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="bg-gray-800">
      <nav className="container w-full mx-auto flex items-center justify-between py-2 px-5">
        <h1 className="text-white">Navbar</h1>

        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <Link href="/">
              <li
                className={`mr-3 cursor-pointer ${
                  pathname === "/" ? "text-slate-300" : "text-white"
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`mr-3 cursor-pointer ${
                  pathname === "/about" ? "text-slate-300" : "text-white"
                }`}
              >
                About
              </li>
            </Link>
            <Link href="/about/profile">
              <li
                className={`mr-3 cursor-pointer ${
                  pathname === "/about/profile"
                    ? "text-slate-300"
                    : "text-white"
                }`}
              >
                Profile
              </li>
            </Link>
          </ul>
          <button
            className="bg-white rounded-md py-1 px-3 text-sm cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
