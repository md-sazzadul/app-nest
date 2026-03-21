import { useLoaderData } from "react-router";
import AppDescription from "../components/appDetails/AppDescription";
import AppInfo from "../components/appDetails/AppInfo";
import RatingChart from "../components/appDetails/RatingChart";
import NoData from "../components/apps/NoData";

const AppDetails = () => {
  const app = useLoaderData();

  if (!app) return <NoData />;

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
      <AppInfo app={app} />
      <RatingChart ratings={app.ratings} />
      <AppDescription description={app.description} />
    </div>
  );
};

export default AppDetails;
