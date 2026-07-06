"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Experience } from "@/types/experience";

function matchesTitle(title: string, term: string) {
  try {
    return new RegExp(term, "i").test(title);
  } catch {
    return title.toLowerCase().includes(term.toLowerCase());
  }
}

export function useFilters(experiences: Experience[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams]
  );

  const setSearch = useCallback(
    (value: string) => updateParam("search", value),
    [updateParam]
  );
  const setCategory = useCallback(
    (value: string) => updateParam("category", value),
    [updateParam]
  );
  const setDestination = useCallback(
    (value: string) => updateParam("destination", value),
    [updateParam]
  );

  const filteredExperiences = useMemo(() => {
    return experiences.filter((experience) => {
      const matchesSearch = search ? matchesTitle(experience.title, search) : true;
      const matchesCategory = category
        ? experience.category === category
        : true;
      const matchesDestination = destination
        ? experience.destination === destination
        : true;
      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [experiences, search, category, destination]);

  return {
    search,
    category,
    destination,
    setSearch,
    setCategory,
    setDestination,
    filteredExperiences,
  };
}
