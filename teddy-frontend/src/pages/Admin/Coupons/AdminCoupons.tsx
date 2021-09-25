import { Table } from "react-bootstrap";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { BiEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { Coupon } from "../../../Types/coupon";
import { useEffect, useState } from "react";
import { ListCoupon } from "../../../service/couponService";

function AdminCoupons() {
  const [coupons, setCoupons] = useState<Array<Coupon>>();
  const token = sessionStorage.getItem("token") || "";

  useEffect(() => {
    const onSuccess = (response: any) => {
      console.log(response.data)
      setCoupons(response.data);
    };

    ListCoupon({
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
            <div className="d-flex ">
              <h3>Lista de Cupons</h3>
              <Link
                to="cupons/new"
                className="btn-sm btn btn-outline-success ml-auto mb-1"
              >
                <IoMdAddCircleOutline fontSize={25} /> Novo Cupom
              </Link>
            </div>

            <hr />
            <div className="d-flex mt-3">
              <aside className="left-filter col-3">
                <form className="filter-admin">
                  <h4>Filtro</h4>
                  <hr />

                  <div className="form-group">
                    <label htmlFor="products">Codigo do cupom:</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="products">Valor da compra até:</label>
                    <input type="text" className="form-control" />
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

                  <div className="form-group">
                    <label htmlFor="products">Vezes utilizadas:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <button className="buttom btn-block">Pesquisar</button>
                </form>
              </aside>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Codigo do cupom</th>
                    <th>Valor</th>
                    <th>Data de criação</th>
                    <th>Quantidade disponvel</th>
                    <th>Edição</th>
                    <th>Exclusão</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons?.map((coupons, index) => {
                    return <tr key={index}>
                        <td>{coupons?.code}</td>
                        <td>
                          <label>R$</label> {coupons?.value}
                        </td>
                        <td>{coupons?.createdAt}</td>
                        <td>{coupons?.amount}</td>

                        <td>
                          <span className="btn-sm btn btn-outline-primary">
                            <Link to={`/admin/coupons/${coupons?.id}`}>
                            <BiEditAlt fontSize={20} />
                            Editar
                            </Link>
                          </span>
                        </td>
                        <td>
                          <span className="btn-sm btn btn-outline-danger">
                            <BsTrashFill fontSize={20} /> Excluir
                          </span>
                        </td>
                    </tr>;
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

export default AdminCoupons;
