import { Table } from "react-bootstrap";
import { AiOutlineCreditCard, AiOutlineDelete } from "react-icons/ai";
import { BiCalendarHeart } from "react-icons/bi";
import { TiSortNumerically } from "react-icons/ti";
import CustomerAccount from "../components/CustomerAccount/CustomerAccount";

function Cards() {
  return (
    <CustomerAccount>
      <section className="border">
        <Table hover>
          <thead>
            <tr>
              <th>
                <BiCalendarHeart size={20} className="icon" /> Data de criação
              </th>
              <th>
                <TiSortNumerically size={20} className="icon" /> Número
              </th>
              <th>
                <AiOutlineCreditCard size={20} className="icon" /> Bandeira
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">
                <span>25/07/2021 10:30:00</span>
              </td>
              <td className="align-middle">****1234</td>
              <td className="align-middle">MasterCard</td>
              <td className="align-middle">
                <div className="d-flex m-auto">
                  <div className="m-auto btn btn-sm btn-outline-danger">
                    <AiOutlineDelete fontSize={24} className="m-auto" />
                    <span className="m-auto">Excluir</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="d-flex p-4">
          <button className="btn btn-primary ml-auto">
            Adicionar novo Cartão
          </button>
        </div>
      </section>
    </CustomerAccount>
  );
}

export default Cards;
