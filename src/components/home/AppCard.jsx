import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="card bg-base-100 shadow hover:shadow-lg transition"
    >
      <figure className="p-4">
        <img
          src={app.image}
          alt={app.title}
          className="h-36 w-full object-contain"
        />
      </figure>

      <div className="card-body pt-0">
        <h3 className="font-semibold text-sm">{app.title}</h3>

        <div className="flex justify-between items-center mt-2 text-xs">
          {/* Downloads */}
          <span className="badge badge-success gap-1">
            ⬇ {Math.floor(app.downloads / 1000000)}M
          </span>

          {/* Rating */}
          <span className="badge badge-warning gap-1">⭐ {app.ratingAvg}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
