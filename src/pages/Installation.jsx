import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getInstalledApps, uninstallApp } from "../utils/localStorage";

const Installation = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(getInstalledApps());
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

      {/* Count */}
      <p className="mb-4 font-semibold">{apps.length} Apps Found</p>

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
