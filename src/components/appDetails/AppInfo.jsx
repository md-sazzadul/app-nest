import { useState } from "react";
import { toast } from "react-toastify";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const AppInfo = ({ app }) => {
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App installed successfully 🎉");
  };

  return (
    <div className="border border-gray-200 p-6 rounded-lg bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* App Image */}
        <div className="w-40 h-40 bg-gray-100 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="max-h-28 max-w-28 object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {app.title}
          </h1>

          <p className="text-gray-500 mt-1 text-sm">
            Developed by{" "}
            <span className="text-purple-500 font-medium">
              {app.companyName}
            </span>
          </p>

          <div className="border-t border-gray-200 my-4" />

          {/* Stats Section */}
          <div className="flex flex-wrap gap-10">
            {/* Downloads */}
            <div className="flex items-center gap-3">
              <img src={downloadIcon} alt="downloads" className="w-6 h-6" />
              <div>
                <p className="text-gray-400 text-xs">Downloads</p>
                <p className="font-bold text-xl text-gray-800">
                  {Math.floor(app.downloads / 1000000)}M
                </p>
              </div>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-3">
              <img src={ratingIcon} alt="ratings" className="w-6 h-6" />
              <div>
                <p className="text-gray-400 text-xs">Average Ratings</p>
                <p className="font-bold text-xl text-gray-800">
                  {app.ratingAvg}
                </p>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-3">
              <img src={reviewIcon} alt="reviews" className="w-6 h-6" />
              <div>
                <p className="text-gray-400 text-xs">Total Reviews</p>
                <p className="font-bold text-xl text-gray-800">
                  {Math.floor(app.reviews / 1000)}K
                </p>
              </div>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all ${
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
