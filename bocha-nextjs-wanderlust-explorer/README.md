# Wanderlust Explorer

A multi-page experience explorer built for the Wanderlust Labs MVP challenge. Users can browse, search and filter 100 travel experiences, save favorites, and share filtered views through the URL.

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Features

- **Home (`/`)** — hero section with a call to action into the explorer.
- **Explorer (`/experiences`)** — grid of all 100 experiences with a search bar and category/destination filters. Search and filters are synced to the URL as query params (e.g. `/experiences?search=trek&category=Adventure&destination=Kyoto%2C%20Japan`) and prefill on load.
- **Detail (`/experiences/[id]`)** — full details for a single experience read from the local dataset.
- **Favorites (`/favorites`)** — experiences marked as favorites, held in shared component state.
- **Profile (`/profile`)** — a simulated user profile with a live count of saved favorites.

Search matches experience titles using a case-insensitive regular expression (`new RegExp(term, "i").test(title)`), and combines independently with the category and destination filters.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React `useState`/`useContext` only — no external state management library

## Project structure

```
src/
  app/                      routes (home, experiences, experiences/[id], favorites, profile)
  components/               ExperienceCard, SearchBar, FilterBar, Navbar
  context/                  FavoritesContext (shared favorites state)
  hooks/                    useFilters (search + filter logic, synced with the URL)
  data/                     experiences.ts (100 generated experiences)
  types/                    Experience interface
```

## Design References

UIs that inspired the discovery-card layout, search bar placement and filter styling for the explorer:

- **[Airbnb Experiences](https://www.airbnb.com/s/experiences)** — clean card grid with rounded corners, category pills, and a heart icon in the top-right corner of each card for saving favorites. Directly inspired `ExperienceCard`'s layout and the favorite toggle.
- **[GetYourGuide](https://www.getyourguide.com)** — prominent search bar combined with lightweight dropdown filters above the results grid, with an immediate result count. Inspired the search + filter bar layout in `/experiences`.
- **[Booking.com Attractions](https://www.booking.com/attractions)** — consistent use of a sticky navigation bar with active-state highlighting across pages, and a simple hero section with a single primary call to action on the homepage.

## Notes

- Favorites are kept in React state for the session only; persistence (e.g. `localStorage`) is intentionally out of scope for this project.
- Experience images are placeholders from `picsum.photos`.
