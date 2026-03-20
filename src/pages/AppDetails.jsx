import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AppInfo from "../components/appDetails/AppInfo";
import RatingChart from "../components/appDetails/RatingChart";
import NoData from "../components/apps/NoData";

const AppDetails = () => {
  const { id } = useParams();
  const [apps, setApps] = useState([]);
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        const found = data.find((a) => a.id === Number(id));
        setApp(found);
      });
  }, [id]);

  if (!app) {
    return <NoData />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
      <AppInfo app={app} />

      <RatingChart ratings={app.ratings} />
    </div>
  );
};

export default AppDetails;
