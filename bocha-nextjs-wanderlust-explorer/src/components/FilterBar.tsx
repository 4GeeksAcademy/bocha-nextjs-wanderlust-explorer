"use client";

import type { ExperienceCategory } from "@/types/experience";

interface FilterBarProps {
  categories: ExperienceCategory[];
  destinations: string[];
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export default function FilterBar({
  categories,
  destinations,
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 sm:w-auto"
      >
        <option value="">All categories</option>
        {categories.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={destination}
        onChange={(event) => onDestinationChange(event.target.value)}
        className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 sm:w-auto"
      >
        <option value="">All destinations</option>
        {destinations.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
