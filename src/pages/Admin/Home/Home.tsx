import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import Chart from "../../../components/Chart/Chart";
import { BiCreditCard } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";

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
          <div className="card card-dashboard">
            <label className="font-weight-bold card card-label">
              Total das vendas
            </label>
            <div className="card-icons">
              <MdAttachMoney fontSize={50} />
            </div>
            <div className="d-flex">
              <span className="font-weight-bold card-span">
                <label className="font-weight-bold card-span">R$ </label>1000.0
              </span>
            </div>
          </div>
          <div className="card card-dashboard">
            <label className="font-weight-bold card card-label">
              Vendas | 1° cartão de credito
            </label>
            <div className="card-icons">
              <BiCreditCard fontSize={50} />
            </div>
            <div className="card-span">
              <span className="font-weight-bold ">
                <label className="font-weight-bold card-span">N° </label>
                1.0
              </span>
            </div>
          </div>
          <div className="card card-dashboard">
            <label className="font-weight-bold card card-label">
              Vendas | N° cartões de credito
            </label>
            <div className="card-icons">
              <BiCreditCard fontSize={50} />
            </div>
            <div className="card-span">
              <span className="font-weight-bold ">
                <label className="font-weight-bold card-span">N° </label>
                2.0
              </span>
            </div>
          </div>
        </div>
        <form className="d-flex justify-content-center">
          <div className="row col-12">
            <div className="form-group col-sm-3">
              <label>Data início:</label>
              <input type="date" name="start-date" className="form-control" />
            </div>
            <div className="form-group col-sm-3">
              <label>Data fim:</label>
              <input type="date" name="end-date" className="form-control" />
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="products">Status:</label>
              <select defaultValue="" className="form-control">
                <option value="">Selecione</option>
                <option value="accept">Aceito</option>
                <option value="proccessing"></option>
                <option value="denied">Negado</option>
              </select>
            </div>

            
            <button
              className=" col-sm-3 buttom btn-block"
              style={{
                width: 20, 
                height: 50,
                alignSelf: "flex-end",
                marginBottom: "1rem",  
              }}
            >
              <BiSearchAlt fontSize={20} />
              Pesquisar
            </button>
          </div>
        </form>
        <Chart data={data} dataKeys={dataKeys} />
      </main>
    </>
  );
}

export default AdminIndex;
