"use client";

import React from "react";

export default function Error() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3">
      <h1 className="text-9xl">500</h1>
      <h1 className="text-xl">Somthing went wrong!</h1>
    </div>
  );
}
