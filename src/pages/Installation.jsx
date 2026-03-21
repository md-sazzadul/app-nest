import { useState } from "react";
import { toast } from "react-toastify";
import { getInstalledApps, uninstallApp } from "../utils/localStorage";

const Installation = () => {
  const [apps, setApps] = useState(() => getInstalledApps());
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...apps].sort((a, b) => {
      const aSize = a.size || 0;
      const bSize = b.size || 0;
      return order === "high-low" ? bSize - aSize : aSize - bSize;
    });
    setApps(sorted);
  };

  const handleUninstall = (id, name) => {
    uninstallApp(id);
    setApps((prev) => prev.filter((app) => app.id !== id));
    toast.info(`${name} uninstalled successfully ❌`);
  };

  const formatDownloads = (downloads) => {
    const num = Number(downloads);
    if (isNaN(num) || !downloads) return "0";
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`;
    if (num >= 1_000_000) return `${Math.floor(num / 1_000_000)}M`;
    if (num >= 1_000) return `${Math.floor(num / 1_000)}K`;
    return String(num);
  };

  return (
    <div>
      <section className="bg-base-200 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            Your Installed Apps
          </h1>
          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </section>

      <div className="bg-base-200 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
          <div className="flex justify-between items-center mb-6">
            <p className="font-semibold text-slate-700">
              {apps.length} Apps Found
            </p>

            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="appearance-none border border-gray-300 bg-white rounded-lg px-4 py-2 pr-9 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:border-gray-400 transition-colors cursor-pointer"
              >
                <option value="">Sort By Size</option>
                <option value="high-low">High → Low</option>
                <option value="low-high">Low → High</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {apps.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl text-center py-16 px-6">
                <p className="text-4xl mb-4">📱</p>
                <p className="text-gray-500 font-medium text-base">
                  No apps installed yet
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Browse our app collection and install some!
                </p>
              </div>
            ) : (
              apps.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                      {app.image ? (
                        <img
                          src={app.image}
                          alt={app.title}
                          className="w-11 h-11 object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="text-2xl">📱</span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                        {app.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1.5 text-xs md:text-sm">
                        <span className="flex items-center gap-1 text-indigo-500 font-semibold">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 16l-6-6h4V4h4v6h4l-6 6z" />
                            <rect x="5" y="18" width="14" height="2" rx="1" />
                          </svg>
                          {formatDownloads(app.downloads)}
                        </span>

                        <span className="flex items-center gap-1 text-orange-400 font-semibold">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          {app.ratingAvg ?? app.rating ?? "N/A"}
                        </span>

                        <span className="text-gray-400 font-medium">
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="shrink-0 bg-green-500 hover:bg-green-600 active:scale-95 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-150"
                  >
                    Uninstall
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
