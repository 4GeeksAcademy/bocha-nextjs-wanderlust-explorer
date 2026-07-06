import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900 px-6 py-24 text-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-teal-100">
          Wanderlust Labs
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Discover experiences worth traveling for
        </h1>
        <p className="max-w-xl text-lg text-teal-50">
          From food crawls in Bangkok to sailing routes across the Adriatic —
          explore, search and save the moments that make a trip unforgettable.
        </p>
        <Link
          href="/experiences"
          className="mt-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-teal-700 shadow-lg transition-transform hover:scale-105"
        >
          Explore experiences
        </Link>
      </div>
    </div>
  );
}
