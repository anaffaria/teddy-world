import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { BsTrashFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";

function AdminCustomers() {
  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <h3>Lista de Clientes</h3>
            <hr />
            <div className="d-flex mt-3">
              <aside className="left-filter col-3">
                <form className="filter-admin">
                  <h4>Filtro</h4>
                  <hr />

                  <div className="form-group">
                    <label htmlFor="products">Nome do cliente:</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Documento:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Estado:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione uma opção</option>
                      <option value="">São Paulo</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">E-mail</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Classificação do cliente:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione a classificação</option>
                      <option value="">Bronze</option>
                      <option value="">Prata</option>
                      <option value="">Ouro</option>
                    </select>
                  </div>

                  <button className="buttom btn-block">
                    Pesquisar
                  </button>
                </form>
              </aside>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th><BiHash fontSize={20}/></th>
                    <th>Nome</th>
                    <th>Documentos</th>
                    <th>Estado</th>
                    <th>E-mail</th>
                    <th>Classificação do cliente</th>
                    <th>Exclusão</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>User</td>
                    <td>11111111111</td>
                    <td>São Paulo</td>
                    <td>user@gmail.com</td>
                    <td>Ouro</td>
                    <td>
                      <span className="btn-sm btn btn-outline-danger">
                        <BsTrashFill fontSize={20} /> Desativar
                      </span>
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

export default AdminCustomers;
