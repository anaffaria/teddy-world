import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { useEffect, useState } from "react";
import { GetOrders, UpdateOrder } from "../../../service/orderService";
import { Order } from "../../../Types/order";

function AdminOrders() {
  const [orders, setOrders] = useState<Array<Order>>();
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    const onSuccess = (resp: any) => {
      setOrders(resp.data);
    };

    const onError = (err: any) => {
      console.log(err);
    };

    GetOrders({
      onSuccess,
      onError,
      token,
    });
  }, [token]);

  function switchOrder(key: string) {
    switch (key) {
      case "Processando":
        return "0";
      case "Em Transporte":
        return "1";
      case "Entregue":
        return "2";
      case "Aguardando Troca":
        return "3";
      case "Troca Recusada":
        return "4";
      case "Troca Aprovada":
        return "5";
      case "Em Processo de Troca":
        return "6";
      case "Pedido cancelado":
        return "7";
      default:
        break;
    }
  }

  function handleChangeStatus(value: string, id: number) {
    const onSuccess = (resp: any) => {
      console.log(resp);
    };

    const onError = (err: any) => {
      console.log(err);
    };

    UpdateOrder({
      onSuccess,
      onError,
      token,
      data: {
        id,
        status: value,
      },
    });
  }

  function renderTable() {
    return orders?.map((order, index) => {
      return (
        <tr key={index}>
          <td>{order.id}</td>
          <td>
            <label>R$</label> {order.total}
          </td>
          <td>{order.createdAt}</td>
          <td className="d-flex flex-column">
            {order.itemList.map((item) => {
              return `${item.amount}* ${item.teddy.title} = ${
                item.amount * item.teddy.priceFactory
              }`;
            })}
          </td>
          <td style={{ width: 150 }}>
            <select
              defaultValue={switchOrder(order.status)}
              className="form-control"
              onChange={(e) => handleChangeStatus(e.target.value, order.id)}
            >
              <option value="">Selecione</option>
              <option value="0">Processando</option>
              <option value="1">Em Transporte</option>
              <option value="2">Entregue</option>
              <option value="3">Aguardando Troca</option>
              <option value="4">Troca Recusada</option>
              <option value="5">Troca Aprovada</option>
              <option value="6">Em Processo de Troca</option>
              <option value="7">Pedido cancelado</option>
            </select>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <h3>Lista de Pedidos</h3>
            <hr />
            <div className="d-flex mt-3">
              <aside className="left-filter col-3">
                <form className="filter-admin">
                  <h4>Filtro</h4>
                  <hr />

                  <div className="form-group">
                    <label htmlFor="products">Número do pedido:</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">
                      Contém os seguintes produtos:
                    </label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Status:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione uma opção</option>
                      <option value="delivered">Entregue</option>
                      <option value="proccessing">Processando Pagamento</option>
                      <option value="transporting">Em Transporte</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Produtos:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione uma opção</option>
                      <option value="lion">Leão</option>
                      <option value="girafa">Girafa</option>
                      <option value="elephant">Elefante</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Categorias:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione uma opção</option>
                      <option value="lion">Leão</option>
                      <option value="girafa">Girafa</option>
                      <option value="elephant">Elefante</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Data início:</label>
                    <input
                      type="date"
                      name="start-date"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group ">
                    <label>Data fim:</label>
                    <input
                      type="date"
                      name="end-date"
                      className="form-control"
                    />
                  </div>

                  <button className="buttom btn-block">Pesquisar</button>
                </form>
              </aside>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Nº Pedido</th>
                    <th>Valor da compra </th>
                    <th>Data da compra</th>
                    <th>Conteúdo comprado</th>
                    <th>Situação</th>
                  </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminOrders;
