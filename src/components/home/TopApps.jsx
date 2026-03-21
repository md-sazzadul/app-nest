import { useEffect, useState } from "react";
import { Link } from "react-router";
import AppCard from "./AppCard";

const TopApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 8)));
  }, []);

  return (
    <section className="py-14 bg-base-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trending Apps
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps Grid — 4 columns, 2 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/apps"
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:bg-primary/90 text-white text-sm font-medium px-10 py-2.5 rounded-lg transition-colors"
          >
            Show All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopApps;
