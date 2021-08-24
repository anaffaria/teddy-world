import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { BiBlock } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import Swal from "sweetalert2";

function AdminCustomers() {

  function handleDelete() {
    Swal.fire({
      title: 'Desativar usuário?',
      text: "Está ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletado!',
          'O usuário foi desativado.',
          'success',
        );
      }
    })
  }

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
                    <label htmlFor="products">CPF:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">E-mail</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Classificação do cliente:</label>
                    <select defaultValue="" className="form-control">
                      <option value="">Selecione</option>
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
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Classificação do cliente</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Ana Flávia dos Santos</td>
                    <td>49632584789</td>
                    <td>ana@gmail.com</td>
                    <td>Ouro</td>
                    <td>
                      <span className="btn-sm btn btn-outline-danger" onClick={() => handleDelete()}>
                        <BiBlock fontSize={20} /> Desativar
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
