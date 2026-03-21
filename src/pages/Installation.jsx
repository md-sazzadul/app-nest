import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getInstalledApps, uninstallApp } from "../utils/localStorage";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setApps(getInstalledApps());
  }, []);

  const parseDownloads = (downloads) => {
    if (!downloads) return 0;

    if (downloads.includes("M")) {
      return parseFloat(downloads) * 1_000_000;
    }
    if (downloads.includes("K")) {
      return parseFloat(downloads) * 1_000;
    }

    return parseFloat(downloads);
  };

  const handleSort = (order) => {
    setSortOrder(order);

    const sortedApps = [...apps].sort((a, b) => {
      const aDownloads = parseDownloads(a.downloads);
      const bDownloads = parseDownloads(b.downloads);

      return order === "high-low"
        ? bDownloads - aDownloads
        : aDownloads - bDownloads;
    });

    setApps(sortedApps);
  };

  useEffect(() => {
    const storedApps = getInstalledApps();

    if (sortOrder) {
      handleSort(sortOrder);
    } else {
      setApps(storedApps);
    }
  }, []);

  const handleUninstall = (id, name) => {
    uninstallApp(id);

    // update UI instantly
    const updatedApps = apps.filter((app) => app.id !== id);
    setApps(updatedApps);

    toast.info(`${name} uninstalled successfully ❌`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-2">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">{apps.length} Apps Found</p>

        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Sort By Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      {/* List */}
      <div className="space-y-4">
        {apps.length === 0 ? (
          <p className="text-center text-gray-400">No apps installed yet</p>
        ) : (
          apps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded"
                />

                <div>
                  <h2 className="font-semibold">{app.title}</h2>
                  <div className="text-sm text-gray-500 flex gap-3">
                    <span>⬇ {app.downloads}</span>
                    <span>⭐ {app.rating}</span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
