import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

function AdminDevolutions() {
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
                    <td>Produto defeituoso</td>
                    <td>Aceito</td>
                    <td>
                      <Link to='devolucoes/1/edit'>
                        <FiEdit3 fontSize={20} />
                      </Link>
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

export default AdminDevolutions;
