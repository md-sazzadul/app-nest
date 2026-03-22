import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ ratings }) => {
  const chartData = [...ratings].reverse().map((item) => ({
    name: item.name,
    count: item.count,
  }));

  return (
    <div className="mt-8 sm:mt-10">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">
        Ratings
      </h2>

      <div className="w-full h-56 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 4, right: 16, left: 0, bottom: 4 }}
            barSize={14}
          >
            <XAxis
              type="number"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              width={50}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(249,115,22,0.05)" }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #f3f4f6",
                fontSize: "12px",
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
