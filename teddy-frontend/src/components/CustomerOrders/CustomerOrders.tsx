import { Table } from "react-bootstrap";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import "./CustomerOrders.css";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineBarcode } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import { AiFillCreditCard } from "react-icons/ai";

function CustumerOrders() {
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
            <tr>
              <td>00:01</td>
              <td>001</td>
              <td>
                <label>R$</label> 69.90
              </td>
              <td>Pago</td>
            </tr>
          </tbody>
        </Table>
      </CustomerAccount>
    </>
  );
}

export default CustumerOrders;
