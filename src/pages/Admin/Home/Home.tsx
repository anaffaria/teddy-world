import { FiShoppingBag } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { RiUserHeartLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
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

function AdminIndex() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const links = [
    {
      icon: <GoGraph fontSize={24}></GoGraph>,
      text: "Dashboard",
    },
    {
      icon: <FiShoppingBag fontSize={24}></FiShoppingBag>,
      text: "Pedidos",
    },
    {
      icon: <CgArrowsExchangeAlt fontSize={24}></CgArrowsExchangeAlt>,
      text: "Devoluções",
    },
    {
      icon: <RiUserHeartLine fontSize={24}></RiUserHeartLine>,
      text: "Clientes",
    },
  ];

  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar links={links} />
      <div className="web-content">
        <div className="card-wrapper mb-4">
          <div className="card card-dashboard"></div>
          <div className="card card-dashboard"></div>
          <div className="card card-dashboard"></div>
        </div>
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
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default AdminIndex;
