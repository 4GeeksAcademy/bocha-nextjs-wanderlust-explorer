"use client";

import Link from "next/link";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link href={`/experiences/${experience.id}`} className="block">
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
            {experience.category}
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => onToggleFavorite(experience.id)}
        aria-label={
          isFavorite ? "Remove from favorites" : "Add to favorites"
        }
        aria-pressed={isFavorite}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg shadow transition-transform hover:scale-110"
      >
        <span className={isFavorite ? "text-rose-500" : "text-slate-400"}>
          {isFavorite ? "♥" : "♡"}
        </span>
      </button>

      <Link
        href={`/experiences/${experience.id}`}
        className="flex flex-1 flex-col gap-2 p-4"
      >
        <h3 className="line-clamp-2 font-semibold text-slate-900">
          {experience.title}
        </h3>
        <p className="text-sm text-slate-500">{experience.destination}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-sm">
          <span className="font-semibold text-slate-900">
            ${experience.price.toFixed(2)}
          </span>
          <span className="flex items-center gap-1 text-amber-600">
            ★ {experience.rating.toFixed(1)}
          </span>
        </div>
      </Link>
    </div>
  );
}
