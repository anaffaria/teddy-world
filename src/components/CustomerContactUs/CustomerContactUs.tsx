import { Link, useHistory } from "react-router-dom";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { Table } from "react-bootstrap";
import { AiOutlineBarcode } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiFillSound } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useRef } from "react";
import { FormHandles } from "@unform/core";

export interface CustomerContactUsProps {
  children?: React.ReactNode;
}

interface ListContactUsProps {
  devolution: string;
  name: string;
  numberRequest: string;
  email: string;
  subject: string;
  justification: string;
}

function CustomerContactUs({ children }: CustomerContactUsProps) {
  const history = useHistory();

  async function handleSubmit() {
    history.push("/atendimento/novo");
  }

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

        <div className="col-sm-3 mt-5 mb-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="buttom btn-block custumer_edit-buttom"
          >
            Novo Atendimento
          </button>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerContactUs;
