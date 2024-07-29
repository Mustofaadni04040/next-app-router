import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <div className="bg-gray-800">
      <nav className="container w-full mx-auto flex items-center justify-between py-2 px-5">
        <div>
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
        </div>

        <div className="flex items-center gap-10">
          {status === "authenticated" ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/profile.png"
                  width={20}
                  height={20}
                  alt="profile"
                />
                <h4 className="text-white">{session?.user?.fullname}</h4>
              </div>
              <button
                className="bg-white rounded-md py-1 px-3 text-sm cursor-pointer"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="bg-white rounded-md py-1 px-3 text-sm cursor-pointer"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
