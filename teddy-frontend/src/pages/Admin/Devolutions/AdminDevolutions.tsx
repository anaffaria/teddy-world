import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListDevolutionRequest } from "../../../service/devolutionService";
import { Devolution } from "../../../types/devolution";
import { StatusDevolution } from "../../../components/Utils/StatusesMap";

function AdminDevolutions() {
  const [devolutions, setDevolutions] = useState<Devolution[]>();
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    if (!token) return;
    const onSuccess = (resp: any) => {
      setDevolutions(resp.data);
    };

    ListDevolutionRequest({
      onSuccess,
      token,
    });
  }, [token, setDevolutions]);

  const renderDevolutions = () => {
    return devolutions?.map((devolution, index) => {
      return (
        <tr>
          <td>{devolution.id}</td>
          <td>
            <label>R$</label> {devolution.order?.total}
          </td>
          <td>{devolution.createdAt}</td>
          <td className="d-flex flex-column">
            {devolution.order?.itemList.map((item, index) => {
              return (
                <span>
                  {item.amount}* {item.teddy.title} - {item.teddy.priceFactory}{" "}
                  = {Number(item.amount * item.teddy.priceFactory).toFixed(2)}
                </span>
              );
            })}
          </td>
          <td>{devolution.reason}</td>
          <td>{StatusDevolution.get(devolution!.statusDevolution!)}</td>
          <td>
            <Link to={`devolucoes/${devolution.id}/edit`}>
              <FiEdit3 fontSize={20} />
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <h3>Lista de Devoluções</h3>
            <hr />
            <div className="d-flex mt-3">
              <aside className="left-filter col-3">
                <form className="filter-admin">
                  <h4>Filtro</h4>
                  <hr />

                  <div className="form-group">
                    <label htmlFor="products">Número do pedido</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Valor da compra até:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Data da compra</label>
                    <input
                      type="date"
                      name="start-date"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Conteúdo da compra:</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Descrição do problema:</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Status:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione uma opção</option>
                      <option value="accept">Aceito</option>
                      <option value="proccessing">Aguardando resposta</option>
                      <option value="denied">Negado</option>
                    </select>
                  </div>

                  <button className="buttom btn-block">Pesquisar</button>
                </form>
              </aside>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Nº Pedido</th>
                    <th>Valor da compra</th>
                    <th>Data da compra</th>
                    <th>Contéudo da compra</th>
                    <th>Descrição do problema</th>
                    <th>Status do pedido</th>
                    <th>Atualizar status</th>
                  </tr>
                </thead>
                <tbody>
                  {renderDevolutions()}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminDevolutions;
