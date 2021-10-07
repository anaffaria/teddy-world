import { Table } from "react-bootstrap";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import "./CustomerOrders.css";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineBarcode } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { AiFillCreditCard } from "react-icons/ai";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";

function CustumerOrders() {
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;

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
              <th>
                <AiFillCreditCard size={20} className="icon" /> Situação
              </th>
            </tr>
          </thead>
          <tbody>
            {renderOrders()}
          </tbody>
        </Table>
      </CustomerAccount>
    </>
  );
}

export default CustumerOrders;
