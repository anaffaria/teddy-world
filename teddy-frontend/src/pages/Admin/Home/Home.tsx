import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
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
import { convertISODateToString } from "../../../components/Utils/dateConverter";

type ChartType = {
  labels: string[];
  datasets: [
    {
      backgroundColor: string;
      hoverBackgroundColor: string;
      hoverBorderColor: string;
      borderWidth: number;
      label: string;
      data: Number[];
    },
    {
      backgroundColor: string;
      borderWidth: {
        top: number;
        right: number;
        bottom: number;
        left: number;
      };
      label: string;
      data: Number[];
      barThickness: string;
      minBarLength: number;
    }
  ];
};

function AdminIndex() {
  const [chartData, setChartData] = useState<ChartType>();
  const formRef = useRef<FormHandles>(null);
  const token = localStorage.getItem("token") || "";

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
      setChartData(resp.data);
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

      setChartData(resp.data);
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
        {chartData && <Line data={chartData as any} />}
      </main>
    </>
  );
}

export default AdminIndex;
