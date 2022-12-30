import "./MonthChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../hooks/useFetch";

const sort_by_id = () => {
  return function (elem1, elem2) {
    if (elem1._id < elem2._id) {
      return -1;
    } else if (elem1._id > elem2._id) {
      return 1;
    } else {
      return 0;
    }
  };
};

const Chart = ({ aspect, title }) => {
  const data = [
    { _id: "1", total: 0 },
    { _id: "2", total: 0 },
    { _id: "3", total: 0 },
    { _id: "4", total: 0 },
    { _id: "5", total: 0 },
    { _id: "6", total: 0 },
    { _id: "7", total: 0 },
    { _id: "8", total: 0 },
    { _id: "9", total: 0 },
    { _id: "10", total: 0 },
    { _id: "11", total: 0 },
    { _id: "12", total: 0 },
  ];
  const monthly_count = useFetch(`/admin/countIncome`).data;
  data.forEach((element) => {
    monthly_count.forEach((element1) => {
      if (element1._id == element._id) {
        element.total = element1.total;
      }
    });
  });
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="_id" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
