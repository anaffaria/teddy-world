import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { BiEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function AdminTeddy() {
  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <div className="d-flex ">
              <h3>Lista de Pelúcias </h3>
              <Link to='pelucias/new' className="btn-sm btn btn-outline-success ml-auto mb-1">
                <IoMdAddCircleOutline fontSize={25} /> Nova Pelúcia
              </Link>
            </div>

            <hr />
            <div className="d-flex mt-3">
              <aside className="left-filter col-3">
                <form className="filter-admin">
                  <h4>Filtro</h4>
                  <hr />

                  <div className="form-group">
                    <label htmlFor="products">Nome do produto:</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Valor até:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Categoria:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione uma opção</option>
                      <option value="">Elefante</option>
                      <option value="">Urso</option>
                      <option value="">Panda</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Tamanho:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione uma opção</option>
                      <option value="">Elefante</option>
                      <option value="">Urso</option>
                      <option value="">Panda</option>
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
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Tamanho</th>
                    <th>Estoque</th>
                    <th>Edição</th>
                    <th>Exclusão</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Leão</td>
                    <td>
                      <label>R$</label> 200,0
                    </td>
                    <td>pelucia</td>
                    <td>0cm a 27cm</td>
                    <td>100</td>
                    
                    <td>
                      <span className="btn-sm btn btn-outline-primary">
                        <BiEditAlt fontSize={20} />
                        Editar
                      </span>
                    </td>
                    <td>
                      <span className="btn-sm btn btn-outline-danger">
                        <BsTrashFill fontSize={20} /> Editar
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

export default AdminTeddy;
