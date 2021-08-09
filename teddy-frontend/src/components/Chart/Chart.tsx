import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RiBearSmileFill } from "react-icons/ri";

interface ChartProps {
  data: Array<{
    name: string;
    [key: string]: number | string;
  }>;
  dataKeys: {
    categories: Array<string>;
    products: Array<string>;
  };
}

function Chart({ data, dataKeys }: ChartProps) {
  const CustomizedDot = (props: any) => {
    const { cx, cy, value } = props;

    if (value > 2500) {
      return (
        <RiBearSmileFill x={cx - 10} y={cy - 10} fontSize={25} color="green" />
      );
    }

    return (
      <RiBearSmileFill x={cx - 10} y={cy - 10} fontSize={25} color="red" />
    );
  };
  return (
    <ResponsiveContainer height={500}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeys.categories.map((element, index) => {
          return (
            <Line
              key={index}
              type="monotone"
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              dataKey={element}
              strokeWidth={1.5}
              activeDot={<CustomizedDot />}
            />
          );
        })}
        {dataKeys.products.map((element, index) => {
          return (
            <Line
              type="monotone"
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              dataKey={element}
              strokeWidth={2}
              activeDot={<CustomizedDot />}
              key={index}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
