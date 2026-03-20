import { useState } from "react";
import { toast } from "react-toastify";

// ✅ Import your icons
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
    <div className="bg-base-200 p-6 rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* App Image */}
        <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center shadow">
          <img
            src={app.image}
            alt={app.title}
            className="max-h-32 object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">{app.title}</h1>

          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-primary font-medium">{app.companyName}</span>
          </p>

          <div className="divider my-4"></div>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-10">
            {/* Downloads */}
            <div className="flex items-center gap-3">
              <img src={downloadIcon} alt="downloads" className="w-6 h-6" />
              <div>
                <p className="text-gray-400 text-sm">Downloads</p>
                <p className="font-bold text-xl">
                  {Math.floor(app.downloads / 1000000)}M
                </p>
              </div>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-3">
              <img src={ratingIcon} alt="ratings" className="w-6 h-6" />
              <div>
                <p className="text-gray-400 text-sm">Average Ratings</p>
                <p className="font-bold text-xl">{app.ratingAvg}</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-3">
              <img src={reviewIcon} alt="reviews" className="w-6 h-6" />
              <div>
                <p className="text-gray-400 text-sm">Total Reviews</p>
                <p className="font-bold text-xl">
                  {Math.floor(app.reviews / 1000)}K
                </p>
              </div>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn mt-6 ${installed ? "btn-success" : "btn-primary"}`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
