"use client";

import { useMemo } from "react";
import { experiences } from "@/data/experiences";
import { EXPERIENCE_CATEGORIES } from "@/types/experience";
import { useFilters } from "@/hooks/useFilters";
import { useFavorites } from "@/context/FavoritesContext";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencesExplorer() {
  const {
    search,
    category,
    destination,
    setSearch,
    setCategory,
    setDestination,
    filteredExperiences,
  } = useFilters(experiences);
  const { isFavorite, toggleFavorite } = useFavorites();

  const destinations = useMemo(
    () => Array.from(new Set(experiences.map((e) => e.destination))).sort(),
    []
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Explore experiences
        </h1>
        <p className="mt-1 text-slate-500">
          {filteredExperiences.length} of {experiences.length} experiences
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="sm:flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <FilterBar
          categories={EXPERIENCE_CATEGORIES}
          destinations={destinations}
          category={category}
          destination={destination}
          onCategoryChange={setCategory}
          onDestinationChange={setDestination}
        />
      </div>

      {filteredExperiences.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-24 text-center">
          <p className="text-lg font-medium text-slate-700">
            No se encontraron resultados
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Try a different search term or clear your filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
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
