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
import { DeleteOrder } from "../../service/orderService";

function CustumerOrders() {
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;
  const token = localStorage.getItem("token") || "";
  const history = useHistory();

  useEffect(() => {
    if (!customer?.id || !setCustomer || !history || !token) return;

    const onSuccess = (resp: any) => {
      setCustomer(resp.data);
    };

    const onError = (err: AxiosError) => {
      if (err.response!.status! >= 401 && err.response!.status! <= 403) {
        history.push("/login");
      }
    };

    GetCustomer({ onError, onSuccess, token, id: `${customer?.id}` });
  }, [token, customer?.id, setCustomer, history]);

  function cancelOrder(id: number) {
    const data = {
      id,
    };

    const onSuccess = () => {
      Swal.fire({
        title: "Pedido cancelado",
        icon: "success",
      });

      setCustomer((prev) => {
        const newCustomer = Object.assign({}, prev);

        const index = newCustomer.ordersDTOS?.findIndex(
          (order) => order.id === id
        );

        if (index !== undefined && newCustomer.ordersDTOS) {
          newCustomer.ordersDTOS[index].status = "Pedido cancelado";
        }

        return newCustomer;
      });
    };

    const onError = (err: any) => {
      Swal.fire({
        title: "Tivemos um problema por aqui :(",
        icon: "error",
      });
      console.log(err);
    };

    onSuccess();

    DeleteOrder({
      token,
      id: `${customer?.id}`,
      onSuccess,
      onError,
      data,
    });
  }

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
          <td>
            {order.hasDevolution && (
              <span className="badge badge-warning">Troca solicitada</span>
            )}
          </td>
          <td id="cancelar">
            {order.status === "Processando" && (
              <button
                className="btn badge badge-info"
                onClick={() => {
                  cancelOrder(order.id);
                }}
              >
                Cancelar Compra
              </button>
            )}
          </td>
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
              <th colSpan={3}>
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
