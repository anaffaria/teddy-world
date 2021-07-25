import { Link } from "react-router-dom";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { Table } from "react-bootstrap";
import { AiOutlineBarcode } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiFillSound } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

export interface CustomerContactUsProps {
  children?: React.ReactNode;
}

function CustomerContactUs({ children }: CustomerContactUsProps) {
  return (
    <>
      <CustomerAccount>
        <Table>
          <thead>
            <tr>
              <th>
                <AiOutlineBarcode size={20} className="icon" /> Código
              </th>
              <th>
                <MdDateRange size={20} className="icon" /> Data
              </th>
              <th>
                <AiFillMessage size={20} className="icon" /> Assunto
              </th>
              <th>
                <AiOutlineUnorderedList size={20} className="icon" /> Pedido
              </th>
              <th>
                <AiFillSound size={20} className="icon" /> Situação
              </th>
              <th>
                <IoMdTrash size={20} className="icon" /> Encerrar
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
              <td>001</td>
              <td>69.90</td>
            </tr>
          </tbody>
        </Table>
        
        <div className="col mt-5 mb-5 d-flex justify-content-end">
          <Link to="/atendimento/novo">
            <button type="submit" className="custumer_edit-buttom">
              Novo Atendimento
            </button>
          </Link>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerContactUs;
