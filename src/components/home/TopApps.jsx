import { Link, useLoaderData } from "react-router";
import AppCard from "./AppCard";

const TopApps = () => {
  const apps = useLoaderData();
  const topApps = apps.slice(0, 8);

  return (
    <section className="py-10 sm:py-14 bg-base-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Trending Apps
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <Link
            to="/apps"
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-medium px-8 sm:px-10 py-2.5 rounded-lg transition-colors"
          >
            Show All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopApps;
