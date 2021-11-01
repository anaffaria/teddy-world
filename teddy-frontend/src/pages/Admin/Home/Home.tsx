import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import Chart from "../../../components/Chart/Chart";
import { BiCreditCard } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Select } from "../../../components/Form/SelectInput";
import InputText from "../../../components/Form/InputText";
import { FilterOrder } from "../../../service/orderService";
import { Line } from "react-chartjs-2";

// Create a Object following this structure in the example bellow:

type ChartType = {
  labels: string[];
  datasets: [
    {
      backgroundColor: "#000000";
      hoverBackgroundColor: string;
      hoverBorderColor: string;
      borderWidth: 1;
      label: "test";
      data: [1, null, 3];
    },
    {
      backgroundColor: "#ff0000";
      borderWidth: { top: 1; right: 1; bottom: 0; left: 1 };
      label: "test";
      data: [1, 3, 5];
      barThickness: "flex";
      minBarLength: 2;
    }
  ];
};

function AdminIndex() {
  const [chartData, setChartData] = useState<ChartType>();
  const formRef = useRef<FormHandles>(null);
  const token = localStorage.getItem("token") || "";

  function convertISODateToString(date: Date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1 || "";
    let dt = date.getDate() || "";

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + "-" + month + "-" + dt;
  }

  useEffect(() => {
    const start = new Date();
    start.setMonth(start.getMonth() - 1);
    const end = new Date();

    const data = {
      start: convertISODateToString(start),
      end: convertISODateToString(end),
      type: "0",
    };
    const onSuccess = (resp: any) => {
      setChartData(() => {
        const labels = resp.data.map((el: any) => el.label + " ");
        return {
          labels,
          datasets: resp.data,
        };
      });
    };

    const onError = (err: any) => {
      console.log(err);
    };

    FilterOrder({
      onSuccess,
      onError,
      token,
      data,
    });
  }, [token]);

  const handleSubmit = (data: any) => {
    console.log(data);
    const onSuccess = (resp: any) => {
      console.log(resp);

      setChartData(() => {
        const labels = resp.data.map((el: any) => el.label);

        return {
          labels,
          datasets: resp.data,
        };
      });
    };

    const onError = (err: any) => {
      console.log(err);
    };

    FilterOrder({
      onSuccess,
      onError,
      token,
      data,
    });
  };

  // gamename or categories
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
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          className="d-flex justify-content-center"
        >
          <div className="row col-12">
            <div className="form-group col-sm-3">
              <label>Data início:</label>
              <InputText type="date" name="start" className="form-control" />
            </div>
            <div className="form-group col-sm-3">
              <label>Data fim:</label>
              <InputText type="date" name="end" className="form-control" />
            </div>
            <div className="form-group col-sm-3">
              <label htmlFor="products">Categoria:</label>
              <Select name="type" defaultValue="" className="form-control">
                <option value="">Selecione</option>
                <option value="0">Pelúcias</option>
                <option value="1">Categoria</option>
              </Select>
            </div>

            <div className="col-sm-3 search-button align-self-end">
              <button
                className="buttom btn-block"
                style={{
                  minWidth: 200,
                  height: 50,
                  alignSelf: "flex-end",
                  marginBottom: "1rem",
                }}
              >
                <BiSearchAlt fontSize={20} />
                Pesquisar
              </button>
            </div>
          </div>
        </Form>
        {/* <Chart data={data} dataKeys={dataKeys} /> */}
        {console.log("chartData", chartData)}
        {chartData && <Line data={chartData as any} />}
      </main>
    </>
  );
}

export default AdminIndex;
