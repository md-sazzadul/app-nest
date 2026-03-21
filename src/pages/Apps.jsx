import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AppsHeader from "../components/apps/AppsHeader";
import AppsToolbar from "../components/apps/AppsToolbar";
import NoData from "../components/apps/NoData";
import AppCard from "../components/home/AppCard";

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [displayedApps, setDisplayedApps] = useState(apps);

  useEffect(() => {
    // If search is empty, update instantly
    if (!search.trim()) {
      setIsSearching(false);
      setDisplayedApps(apps);
      return;
    }

    // Show loading state briefly on each keystroke
    setIsSearching(true);

    const timeout = setTimeout(() => {
      const filtered = apps.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase()),
      );
      setDisplayedApps(filtered);
      setIsSearching(false);
    }, 350);

    return () => clearTimeout(timeout);
  }, [search, apps]);

  return (
    <div>
      <AppsHeader />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <AppsToolbar
          total={displayedApps.length}
          search={search}
          setSearch={setSearch}
        />

        {/* Search loading skeleton */}
        {isSearching ? (
          <SearchSkeleton />
        ) : displayedApps.length === 0 ? (
          <NoData />
        ) : (
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {displayedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Skeleton grid shown while search debounce is pending
const SearchSkeleton = () => (
  <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-pulse"
      >
        {/* Image placeholder */}
        <div className="bg-gray-200 w-full aspect-4/3" />

        {/* Body placeholder */}
        <div className="px-3 pt-2 pb-3 flex flex-col gap-2">
          <div className="h-3.5 bg-gray-200 rounded-full w-4/5" />
          <div className="flex items-center justify-between">
            <div className="h-3 bg-gray-100 rounded-full w-10" />
            <div className="h-3 bg-gray-100 rounded-full w-8" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Apps;
