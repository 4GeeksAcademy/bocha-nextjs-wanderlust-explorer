"use client";

import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import ExperienceCard from "@/components/ExperienceCard";

export default function FavoritesPage() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id)
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Your favorites</h1>
        <p className="mt-1 text-slate-500">
          {favoriteExperiences.length} saved experience
          {favoriteExperiences.length === 1 ? "" : "s"}
        </p>
      </div>

      {favoriteExperiences.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-24 text-center">
          <p className="text-lg font-medium text-slate-700">
            No favorites yet
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Tap the heart on any experience to save it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
