import { FormEvent, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { Form } from "@unform/web";
import Img1 from "../Product/img/img1.jpg";
import "./Checkout.css";
import { ModalTeddy } from "../Modal/Modal";
import { CreditCardForm } from "../Utils/Forms/CreditCardForm";
import { AddressForm } from "../Utils/Forms/AddressForm";

interface CheckoutProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => {} | void;
}

function Checkout({ handleSubmit }: CheckoutProps) {
  const [showNewPaymentMethod, setShowNewPaymentMethod] = useState(false);
  const [showNewAddress, setShowNewAddress] = useState(false);

  const handleClosePayment = () => setShowNewPaymentMethod(false);
  const handleCloseAddress = () => setShowNewAddress(false);

  const formRef = useRef(null);

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Título do Produto</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "middle" }}>1</td>
            <td className="d-flex">
              <figure style={{ width: 73, height: 73, margin: 0 }}>
                <img
                  src={Img1}
                  alt="lion"
                  style={{ width: "100%", height: "100%" }}
                />
              </figure>
              <span className="mt-auto mb-auto ml-3">Leão de Pelúcia - M</span>
            </td>
            <td style={{ verticalAlign: "middle" }}>
              <input className="form-control" type="number" defaultValue={2} />
            </td>
            <td style={{ verticalAlign: "middle" }}>R$: 69,9</td>
            <td style={{ verticalAlign: "middle" }}>R$: 139,8</td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>2</td>
            <td className="d-flex">
              <figure style={{ width: 73, height: 73, margin: 0 }}>
                <img
                  src={Img1}
                  alt="lion"
                  style={{ width: "100%", height: "100%" }}
                />
              </figure>
              <span className="mt-auto mb-auto ml-3">Leão de Pelúcia - M</span>
            </td>
            <td style={{ verticalAlign: "middle" }}>
              <input className="form-control" type="number" defaultValue={2} />
            </td>
            <td style={{ verticalAlign: "middle" }}>R$: 69,9</td>
            <td style={{ verticalAlign: "middle" }}>R$: 139,8</td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>3</td>
            <td className="d-flex">
              <figure style={{ width: 73, height: 73, margin: 0 }}>
                <img
                  src={Img1}
                  alt="lion"
                  style={{ width: "100%", height: "100%" }}
                />
              </figure>
              <span className="mt-auto mb-auto ml-3">Leão de Pelúcia - M</span>
            </td>
            <td style={{ verticalAlign: "middle" }}>
              <input className="form-control" type="number" defaultValue={2} />
            </td>
            <td style={{ verticalAlign: "middle" }}>R$: 69,9</td>
            <td style={{ verticalAlign: "middle" }}>R$: 139,8</td>
          </tr>
        </tbody>
      </Table>

      <section className="d-flex flex-wrap w-100 justify-content-around mt-5">
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          className="col-sm-12 col-md-4 checkout-form"
        >
          <div className="padding-checkout">
            <div className="text-center">
              <h4>Documentos Pessoais</h4>
              <hr />
            </div>

            <div className="form-group">
              <label>Documento</label>
              <select defaultValue="" className="form-control">
                <option value="">Selecione</option>
                <option value={1}>RG: 00.000.000.0</option>
              </select>
            </div>

            <div className="text-center mt-5">
              <h4>Selecione os Endereços</h4>
              <hr />
            </div>

            <div className="form-group">
              <label>Endereço de Entrega</label>
              <select
                defaultValue=""
                className="form-control"
                onChange={(val) => {
                  if (val.currentTarget.value === "-1") setShowNewAddress(true);
                }}
              >
                <option value="">Selecione</option>
                <option value={1}>Endereço de Entrega 1</option>
                <option value={-1}>Cadastrar novo endereço</option>
              </select>
            </div>

            <div className="form-group">
              <label>Endereço de Cobrança</label>
              <select
                defaultValue=""
                className="form-control"
                onChange={(val) => {
                  if (val.currentTarget.value === "-1") setShowNewAddress(true);
                }}
              >
                <option value="">Selecione</option>
                <option value={1}>Endereço de Cobrança 1</option>
                <option value={-1}>Cadastrar novo endereço</option>
              </select>
            </div>

            <div className="text-center mt-5">
              <h4>Opções de Pagamento</h4>
              <hr />
            </div>

            <div className="form-group">
              <label>Método de Pagamento</label>
              <select
                defaultValue=""
                className="form-control"
                onChange={(val) => {
                  if (val.currentTarget.value === "-1")
                    setShowNewPaymentMethod(true);
                }}
              >
                <option value="">Selecione</option>
                <option value={1}>****1234</option>
                <option value={-1}>Cadastrar novo cartão</option>
              </select>
            </div>

            <div className="d-flex">
              <button className="button-checkout">Finalizar Compra</button>
            </div>
          </div>
        </Form>

        <aside className="checkout-info col-sm-12 col-md-3">
          <div className="text-center">
            <h4>Resumo da compra</h4>
            <hr />
          </div>

          <div className="d-flex space-between mt-2">
            <strong className="w-100">Subtotal</strong>
            <div className="d-flex">
              <span>R$:</span>
              <span>419,14</span>
            </div>
          </div>

          <div className="d-flex space-between mt-2">
            <strong className="w-100">Valor do Frete</strong>
            <span>R$:</span>
            <span>23,00</span>
          </div>

          <div className="d-flex space-between mt-2">
            <strong className="w-100">Valor do desconto</strong>
            <span>R$:</span>
            <span>23,00</span>
          </div>

          <div>
            <div className="d-flex space-between mt-2">
              <strong className="w-100">Saldo na carteira</strong>
              <span>R$:</span>
              <span>50,00</span>
            </div>

            <div className="d-flex space-between mt-2">
              <strong className="w-100">Valor descontado na carteira</strong>
              <span>R$:</span>
              <span>25,00</span>
            </div>

            <div className="d-flex space-between mt-2">
              <strong className="w-100">Saldo restante na carteira</strong>
              <span>R$:</span>
              <span>25,00</span>
            </div>

            <hr />

            <div className="form-group mt-2">
              <label>Cupom de Desconto</label>
              <input className="form-control" defaultValue="COUPON502021" />
            </div>
          </div>
        </aside>
      </section>

      <ModalTeddy
        handleClose={handleClosePayment}
        show={showNewPaymentMethod}
        title="Adicionar Novo Cartão"
      >
        <CreditCardForm />
      </ModalTeddy>

      <ModalTeddy
        handleClose={handleCloseAddress}
        show={showNewAddress}
        title="Adicionar Novo Endereço"
      >
        <AddressForm />
      </ModalTeddy>
    </>
  );
}

export default Checkout;
