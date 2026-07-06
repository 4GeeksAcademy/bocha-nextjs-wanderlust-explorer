"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Experience } from "@/types/experience";
import { useFavorites } from "@/context/FavoritesContext";

export default function ExperienceDetailClient({
  experience,
}: {
  experience: Experience;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${experience.title} | Wanderlust Explorer`;
    return () => {
      document.title = previousTitle;
    };
  }, [experience.title]);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-10">
      <Link
        href="/experiences"
        className="w-fit text-sm font-medium text-teal-700 hover:underline"
      >
        ← Back to explorer
      </Link>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-72 w-full bg-slate-100 sm:h-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
            {experience.category}
          </span>
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {experience.title}
              </h1>
              <p className="mt-1 text-slate-500">{experience.destination}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              aria-pressed={favorite}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                favorite
                  ? "border-rose-200 bg-rose-50 text-rose-600"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span>{favorite ? "♥" : "♡"}</span>
              {favorite ? "Saved to favorites" : "Add to favorites"}
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <span className="text-2xl font-bold text-slate-900">
              ${experience.price.toFixed(2)}
            </span>
            <span className="flex items-center gap-1 font-medium text-amber-600">
              ★ {experience.rating.toFixed(1)}
            </span>
          </div>

          <p className="leading-relaxed text-slate-600">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
