"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">

      {/* Icon / Title */}
      <h1 className="text-5xl font-bold text-black">
        Something went wrong
      </h1>

      <p className="text-gray-500 mt-3">
        An unexpected error occurred. Please try again.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">

        <button
          onClick={() => reset()}
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg"
        >
          Try Again
        </button>

        <Link href="/">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg">
            Go Home
          </button>
        </Link>

      </div>
    </div>
  );
}