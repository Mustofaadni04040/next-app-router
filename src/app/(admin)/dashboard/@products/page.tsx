"use client";

import React, { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  async function revalidate() {
    const res = await fetch(
      `http://localhost:3000/api/revalidate?tag=products&secret=adniganteng123`,
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("revalidate failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("revalidate success");
      }
    }
  }
  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-xl flex justify-center items-center">
      <p>{status}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded shadow m-5"
        onClick={revalidate}
      >
        revalidate
      </button>
    </div>
  );
}
