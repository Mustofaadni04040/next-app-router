"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage({ searchParams }: any) {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const callbackUrl = searchParams.callbackUrl || "/product";
  async function handleLogin(e: any) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    // fetch("/api/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: e.currentTarget.email.value,
    //     password: e.currentTarget.password.value,
    //   }),
    // });
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: callbackUrl,
      });
      if (!res?.error) {
        push(callbackUrl);
      } else {
        if (res.status === 401) {
          setError("Email or Password is Incorrect");
          setIsLoading(false);
        }
        console.log(res?.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg min-w-80 lg:min-w-[400px] p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <p className="text-center text-sm text-red-500">{error}</p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login to your account"}
          </button>
        </form>
        <div className="mt-3 flex flex-col gap-3">
          <button
            type="button"
            className="flex items-center justify-center w-full bg-white gap-3 border border-slate-300 rounded-lg hover:bg-slate-100 hover:duration-200"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="google-icon"
              className="w-8 h-8"
            />
            Login with Google
          </button>
          <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              href="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
