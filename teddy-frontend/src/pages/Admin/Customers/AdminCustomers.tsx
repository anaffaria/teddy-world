import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { BsTrashFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { useEffect } from "react";
import { axiosInstance } from "../../../service/serviceInstance";
import { useState } from "react";
import Swal from "sweetalert2";
import { Customer } from "../../../types/customer";
import {
  InactiveCustomer,
  ListCustomers,
} from "../../../service/customerService";

function AdminCustomers() {
  const [customers, setCustomers] = useState<Array<Customer>>([]);
  const token = sessionStorage.getItem("token") || "";

  useEffect(() => {
    const onSuccess = (response: any) => {
      setCustomers(response.data);
    };

    ListCustomers({
      onSuccess,
      token,
    });
  }, [token]);

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
                <thead className="text-truncate">
                  <tr>
                    <th>
                      <BiHash fontSize={20} />
                    </th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Classificação</th>
                    <th>Exclusão</th>
                  </tr>
                </thead>
                <tbody className="text-truncate">
                  {customers.map((customer, index) => {
                    return (
                      <tr key={index}>
                        <td>{customer.id}</td>
                        <td>{customer.fullName}</td>
                        <td>{customer.cpf}</td>
                        <td>{customer.email}</td>
                        <td></td>
                        <td>
                          <button
                            className="btn-sm btn btn-outline-danger"
                            onClick={() => {
                              const onSuccess = () => {
                                Swal.fire({
                                  icon: "success",
                                  title: "Usuário desativado com sucesso!",
                                });

                                setCustomers((prev) => {
                                  let customersList = Object.assign(prev, {});
                                  customersList = customersList.filter(
                                    (el) => el.id !== customer.id
                                  );
                                  console.log(customersList);
                                  return customersList;
                                });
                              };

                              const onError = () => {
                                Swal.fire({
                                  icon: "error",
                                  title: "Oops...",
                                  text: "Algo deu errado por aqui ;( Entre em contato com o administrador",
                                });
                              };

                              InactiveCustomer({
                                token,
                                id: `${customer.id}`,
                                onSuccess,
                                onError,
                              });
                            }}
                          >
                            <BsTrashFill fontSize={20} /> Desativar
                          </button>
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
