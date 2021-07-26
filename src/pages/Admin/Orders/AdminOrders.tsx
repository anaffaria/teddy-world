import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";

function AdminOrders() {
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

                  <button className="buttom btn-block">
                    Pesquisar
                  </button>
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
                <tbody>
                  <tr>
                    <td>123456</td>
                    <td>
                      <label>R$</label> 200,0
                    </td>
                    <td>24/07/2021 - 20:54:00</td>
                    <td className="d-flex flex-column">
                      <span>2* Leão = 100,0</span>
                      <span>1* Girafa = 50,0</span>
                      <span>1* Elefante = 50,0</span>
                    </td>
                    <td style={{width: 150}}>
                      <select defaultValue="" className="form-control">
                        <option value="">Selecione</option>
                        <option value="delivered">Entregue</option>
                        <option value="proccessing">
                          Processando Pagamento
                        </option>
                        <option value="transporting">Em Transporte</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminOrders;
