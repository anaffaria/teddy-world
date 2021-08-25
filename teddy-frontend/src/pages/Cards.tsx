
import { AiOutlineCreditCard, AiOutlineDelete } from "react-icons/ai";
import { BiCalendarHeart } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { TiSortNumerically } from "react-icons/ti";
import { ModalTeddy } from "../components/Modal/Modal";
import { CreditCardForm } from "../components/Forms/CreditCardForm";
import { useState } from "react";
import { Table } from "react-bootstrap";
import CustomerAccount from "../components/CustomerAccount/CustomerAccount";

export interface CreditCard {
  id?: string;
  createdAt?: string;
  deletedAt?: string;
  cardHolder: string;
  creditCardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardSecurity: string;
  cardFavourite: boolean;
  cardFlag: string;
}

function Cards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

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
                  <span></span>
                </td>
                <td className="align-middle"></td>
                <td className="align-middle"></td>
                <td className="align-middle">
                  <div className="d-flex m-auto">
                    <div className="m-auto btn btn-sm btn-outline-danger">
                      <AiOutlineDelete fontSize={24} className="m-auto" />
                      <button className="m-auto">Excluir</button>
                    </div>
                  </div>
                </td>
              </tr>
            
          </tbody>
        </Table>

        <div className="d-flex p-4">
          <div
            className="col-12 col-sm-12  mt-3 align-items-center mt-4 border"
            onClick={handleShow}
          >
            <IoMdAddCircle
              type="button"
              className="col-12 align-items-center"
              size={40}
              color={"#FA98AF"}
            />
            <label className=" col-12 font-weight-bold text-center">
              Adicionar novo cartão
            </label>
          </div>
        </div>
      </section>

      <ModalTeddy
        handleClose={handleClose}
        show={show}
        title="Adicionar Novo Cartão"
      >
        <CreditCardForm />
      </ModalTeddy>
    </CustomerAccount>
  );
}

export default Cards;
