import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-1 px-4 py-12">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">
            404
          </h1>
          <p className="text-gray-500">
            Oops!🙊 The page you're looking for doesn't exist.
          </p>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
