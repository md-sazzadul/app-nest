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
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Trending Apps</h2>

          <p className="text-gray-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-10">
          <Link to="/apps" className="btn btn-primary px-8">
            Show All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopApps;
