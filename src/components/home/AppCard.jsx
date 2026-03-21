import { Link } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden border border-gray-100"
    >
      {/* Image Area — large grey placeholder */}
      <div className="bg-gray-200 w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-16 h-16 object-contain opacity-60"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Card Body */}
      <div className="px-3 py-3 flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 leading-snug line-clamp-1">
          {app.title}
        </h3>

        {/* Badges Row */}
        <div className="flex items-center justify-between">
          {/* Downloads badge — green */}
          <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 rounded-full px-2 py-0.5">
            <img
              src={downloadIcon}
              alt="downloads"
              className="w-3 h-3 object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <span>{Math.floor(app.downloads / 1000000)}M</span>
          </span>

          {/* Rating badge — orange star */}
          <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-400 bg-orange-50 rounded-full px-2 py-0.5">
            <span>★</span>
            <span>{app.ratingAvg}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
