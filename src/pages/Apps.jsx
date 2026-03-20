import { useEffect, useState } from "react";
import AppsHeader from "../components/apps/AppsHeader";
import AppsToolbar from "../components/apps/AppsToolbar";
import NoData from "../components/apps/NoData";
import AppCard from "../components/home/AppCard";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  // Filter Logic (case-insensitive)
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-10 text-center">
      <AppsHeader />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Toolbar */}
        <AppsToolbar
          total={filteredApps.length}
          search={search}
          setSearch={setSearch}
        />

        {/* If no data */}
        {filteredApps.length === 0 ? (
          <NoData />
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
