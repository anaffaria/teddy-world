import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiOutlineCreditCard, AiOutlineDelete } from "react-icons/ai";
import { BiCalendarHeart } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { TiSortNumerically } from "react-icons/ti";
import CustomerAccount from "../components/CustomerAccount/CustomerAccount";

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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Novo Cartão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="creditCardNumber">
                Número do Cartão de Crédito
              </label>
              <input
                type="text"
                name="creditCardNumber"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cardHolder">Nome do Títular</label>
              <input type="text" className="form-control" name="cardHolder" />
            </div>

            <div className="d-flex">
              <div className="form-group mr-3">
                <label htmlFor="cardMonth">Mês</label>
                <input
                  type="number"
                  className="form-control"
                  name="cardMonth"
                  step={1}
                  min={1}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardYear">Ano</label>
                <input
                  type="number"
                  className="form-control"
                  name="cardYear"
                  step={1}
                  min={1}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cardSecurity">CVV</label>
              <input className="form-control" name="cardSecurity" />
            </div>

            <button className="buttom btn-block mt-5">
              Adicionar Cartão
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar
          </Button>
        </Modal.Footer>
      </Modal>
    </CustomerAccount>
  );
}

export default Cards;
