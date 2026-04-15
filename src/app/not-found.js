import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">

      {/* 404 Number */}
      <h1 className="text-7xl font-bold text-green-800">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-lg">
          Go Home
        </button>
      </Link>

    </div>
  );
}