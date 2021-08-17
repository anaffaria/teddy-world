import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { BsTrashFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { useEffect } from "react";
import { axiosInstance } from "../../../service/serviceInstance";
import { useState } from "react";

export interface Customer {
  id: number;
  createdAt: string;
  deletedAt: string;
  fullName: string;
  birthDate: string;
  email: string;
  cpf: string;
  telephone: string;
  gender: string;
  addressList: [];
}

function AdminCustomers() {
  const [customers, setCustomers] = useState<Array<Customer>>([]);

  useEffect(() => {
    axiosInstance
      .get("customers")
      .then((response) => {
        setCustomers(response.data as Array<Customer>);
        console.log(customers)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

                  <button className="buttom btn-block">Pesquisar</button>
                </form>
              </aside>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>
                      <BiHash fontSize={20} />
                    </th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Classificação do cliente</th>
                    <th>Exclusão</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => {
                    return (
                      <tr>
                        <td>{customer.id}</td>
                        <td>{customer.fullName}</td>
                        <td>{customer.cpf}</td>
                        <td>{customer.email}</td>
                        <td>Ouro</td>
                        <td>
                          <span className="btn-sm btn btn-outline-danger">
                            <BsTrashFill fontSize={20} /> Desativar
                          </span>
                        </td>
                      </tr>
                    );
                  })}
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
