import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl">404</h1>
        <h1 className="text-xl">Page Not Found</h1>
      </div>
      <button
        type="button"
        className="bg-blue-500 shadow text-white p-2 rounded"
      >
        <Link href={"/"}>Back to Home</Link>
      </button>
    </div>
  );
}
