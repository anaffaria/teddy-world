import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { BiEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { Teddy } from "../../../Types/Teddy";
import { axiosInstance } from "../../../service/serviceInstance";
import { BiHash } from "react-icons/bi";
import Swal from "sweetalert2";

function AdminTeddy() {
  const [teddies, setTeddies] = useState<Array<Teddy>>([]);

  useLayoutEffect(() => {
    axiosInstance
      .get("teddy")
      .then((response) => {
        setTeddies(response.data);
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
            <div className="d-flex ">
              <h3>Lista de Pelúcias </h3>
              <Link
                to="pelucias/new"
                className="btn-sm btn btn-outline-success ml-auto mb-1"
              >
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
                    <th>Valor</th>
                    <th>Estoque</th>
                    <th>Edição</th>
                    <th>Exclusão</th>
                  </tr>
                </thead>
                <tbody className="text-truncate">
                  {teddies.map((teddy, index) => {
                    return (
                      <tr>
                        <td>{teddy.id}</td>
                        <td>{teddy.title}</td>
                        <td>
                          <label>R$ </label>
                          {teddy.price}
                        </td>
                        <td>{teddy.amount}</td>
                        <td>
                          <Link
                            className="btn-sm btn btn-outline-primary"
                            to={`pelucias/edit/${teddy.id}`}
                          >
                            <BiEditAlt fontSize={20} />
                            Editar
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn-sm btn btn-outline-danger"
                            onClick={() => {
                              axiosInstance
                                .delete(`/teddy/${teddy.id}`)
                                .then((resp) => {
                                  if (resp.data.hasError) throw new Error();
                                  Swal.fire({
                                    icon: "success",
                                    title: "Dados Atualizados!",
                                  });

                                  setTeddies((prev) => {
                                    let teddyList = Object.assign(prev, {});
                                    teddyList = teddyList.filter(
                                      (el) => el.id !== teddy.id
                                    );
                                    console.log(teddyList);
                                    return teddyList;
                                  });
                                })
                                .catch((err) => {
                                  console.log(err);
                                  Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Algo deu errado por aqui ;( Entre em contato com o administrador",
                                  });
                                });
                            }}
                          >
                            <BsTrashFill fontSize={20} /> Excluir
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

export default AdminTeddy;
