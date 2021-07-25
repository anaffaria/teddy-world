import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import Chart from "../../../components/Chart/Chart";

function AdminIndex() {
  const data = [
    {
      name: "JAN",
      uv: 4000,
      pv: 2400,
      kct: 12345,
      amt: 2400,
    },
    {
      name: "FEV",
      uv: 3000,
      pv: 1398,
      kct: 12345,
      amt: 2210,
    },
    {
      name: "MAR",
      uv: 2000,
      pv: 9800,
      kct: 12345,
      amt: 2290,
    },
    {
      name: "ABR",
      uv: 2780,
      pv: 3908,
      kct: 12345,
      amt: 2000,
    },
    {
      name: "MAI",
      uv: 1890,
      pv: 4800,
      kct: 12345,
      amt: 2181,
    },
    {
      name: "JUN",
      uv: 2390,
      pv: 3800,
      kct: 12345,
      amt: 2500,
    },
    {
      name: "JUL",
      uv: 3490,
      pv: 4300,
      kct: 12345,
      amt: 2100,
    },
  ];

  const dataKeys = {
    categories: [],
    products: ["uv", "pv", "kct", "amt"],
  };

  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="card-wrapper mb-4">
          <div className="card card-dashboard"></div>
          <div className="card card-dashboard"></div>
          <div className="card card-dashboard"></div>
        </div>
        <Chart data={data} dataKeys={dataKeys} />
      </main>
    </>
  );
}

export default AdminIndex;
