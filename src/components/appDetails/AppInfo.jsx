import { useState } from "react";
import { toast } from "react-toastify";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { installApp, isAppInstalled } from "../../utils/localStorage";

const AppInfo = ({ app }) => {
  const [installed, setInstalled] = useState(() => isAppInstalled(app.id));

  const handleInstall = () => {
    installApp(app);
    setInstalled(true);
    toast.success("App installed successfully 🎉");
  };

  return (
    <div className="border border-gray-200 p-4 sm:p-6 rounded-lg bg-white">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-center sm:items-start">
        {/* App icon */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gray-100 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="max-h-20 max-w-20 sm:max-h-24 sm:max-w-24 md:max-h-28 md:max-w-28 object-contain"
          />
        </div>

        <div className="flex-1 w-full text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {app.title}
          </h1>

          <p className="text-gray-500 mt-1 text-sm">
            Developed by{" "}
            <span className="text-purple-500 font-medium">
              {app.companyName}
            </span>
          </p>

          <div className="border-t border-gray-200 my-4" />

          <div className="flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-10">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={downloadIcon}
                alt="downloads"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <div>
                <p className="text-gray-400 text-xs">Downloads</p>
                <p className="font-bold text-lg sm:text-xl text-gray-800">
                  {Math.floor(app.downloads / 1000000)}M
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={ratingIcon}
                alt="ratings"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <div>
                <p className="text-gray-400 text-xs">Average Ratings</p>
                <p className="font-bold text-lg sm:text-xl text-gray-800">
                  {app.ratingAvg}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={reviewIcon}
                alt="reviews"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <div>
                <p className="text-gray-400 text-xs">Total Reviews</p>
                <p className="font-bold text-lg sm:text-xl text-gray-800">
                  {Math.floor(app.reviews / 1000)}K
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-5 sm:mt-6 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all ${
              installed
                ? "bg-green-500 cursor-default"
                : "bg-green-500 hover:bg-green-600 active:scale-95"
            }`}
          >
            {installed ? "Installed ✓" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
