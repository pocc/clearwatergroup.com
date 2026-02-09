import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-7xl font-bold text-gray-200">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
