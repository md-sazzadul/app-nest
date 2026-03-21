import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ ratings }) => {
  // Reverse so 5 star is on top
  const chartData = [...ratings].reverse().map((item) => ({
    name: item.name,
    count: item.count,
  }));

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Ratings</h2>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 4, right: 30, left: 10, bottom: 4 }}
            barSize={18}
          >
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={55}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(249,115,22,0.05)" }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #f3f4f6",
                fontSize: "13px",
              }}
            />
            <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingChart;
