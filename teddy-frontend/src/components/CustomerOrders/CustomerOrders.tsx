import { Table } from "react-bootstrap";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import "./CustomerOrders.css";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineBarcode } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { AiFillCreditCard } from "react-icons/ai";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";
import { useEffect } from "react";
import { GetCustomer } from "../../service/customerService";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { AxiosError } from "axios";

function CustumerOrders() {
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;
  const token = localStorage.getItem("token") || "";
  const history = useHistory();

  useEffect(() => {
    const onSuccess = (resp: any) => {
      setCustomer(resp.data);
    };

    const onError = (err: AxiosError) => {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops... Tivemos um erro por aqui.",
      // });

      if(err.response!.status! >= 401 && err.response!.status! <= 403) {
        history.push("/login");
      }
    };

    GetCustomer({ onError, onSuccess, token, id: `${customer?.id}` });
  }, [token, customer?.id, setCustomer, history]);

  function renderOrders() {
    return customer?.ordersDTOS?.map((order, index) => {
      return (
        <tr>
          <td>{order.createdAt}</td>
          <td>{order.id}</td>
          <td>
            <label>R$</label> {order.total}
          </td>
          <td>{order.status}</td>
          <td>{order.hasDevolution && <span className='badge badge-warning'>Troca solicitada</span> }</td>
        </tr>
      );
    });
  }

  return (
    <>
      <CustomerAccount>
        <Table responsive>
          <thead>
            <tr>
              <th>
                <BiTimeFive size={20} className="icon" /> Data/Hora
              </th>
              <th>
                <AiOutlineBarcode size={20} className="icon" /> Código
              </th>
              <th>
                <ImPriceTags size={20} className="icon" /> Valor
              </th>
              <th colSpan={2}>
                <AiFillCreditCard size={20} className="icon" /> Situação
              </th>
            </tr>
          </thead>
          <tbody>{renderOrders()}</tbody>
        </Table>
      </CustomerAccount>
    </>
  );
}

export default CustumerOrders;
