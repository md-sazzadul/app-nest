import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ ratings }) => {
  // Transform data for chart
  const chartData = ratings.map((item) => ({
    name: item.name,
    count: item.count,
  }));

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-6">Ratings</h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={70} />
            <Tooltip />

            <Bar dataKey="count" fill="#f97316" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingChart;
