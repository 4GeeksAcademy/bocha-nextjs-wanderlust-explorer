"use client";

import { useFavorites } from "@/context/FavoritesContext";

const MOCK_USER = {
  name: "Alex Rivera",
  email: "alex.rivera@example.com",
  memberSince: "March 2023",
  avatarInitials: "AR",
  bio: "Always chasing the next sunrise hike or hidden street-food stall. Full-time explorer, part-time planner.",
};

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Profile</h1>

      <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-teal-600 text-2xl font-semibold text-white">
          {MOCK_USER.avatarInitials}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {MOCK_USER.name}
          </h2>
          <p className="text-sm text-slate-500">{MOCK_USER.email}</p>
          <p className="mt-2 text-sm text-slate-600">{MOCK_USER.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Member since</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            {MOCK_USER.memberSince}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Saved favorites</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            {favoriteIds.length}
          </p>
        </div>
      </div>
    </div>
  );
}
