import { useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { Form } from "@unform/web";
import Img1 from "../Product/img/img1.jpg";
import "./Checkout.css";
import { ModalTeddy } from "../Modal/Modal";
import { CreditCardForm } from "../Forms/CreditCardForm";
import { AddressForm } from "../Forms/AddressForm";
import { FormHandles } from "@unform/core";
import { Select } from "../Form/SelectInput";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { IoMdTrash } from "react-icons/io";

interface CheckoutSubmit {
  document: string;
  deliveryAddress: string;
  billingAddress: string;
  paymentMethod: string;
}

function Checkout() {
  const [showNewPaymentMethod, setShowNewPaymentMethod] = useState(false);
  const [showNewAddress, setShowNewAddress] = useState(false);

  const handleClosePayment = () => setShowNewPaymentMethod(false);
  const handleCloseAddress = () => setShowNewAddress(false);

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  async function handleSubmit(data: CheckoutSubmit) {
    try {
      const schema = Yup.object().shape({
        document: Yup.string().required("O documento é obrigatório"),
        deliveryAddress: Yup.string()
          .required("Endereço de entrega é obrigatório")
          .test(
            "Endereço",
            "Endereço de entrega inválido",
            (value = "") => Number(value) > 0
          ),
        billingAddress: Yup.string()
          .required("Endereço de cobrança é obrigatório")
          .test(
            "Endereço",
            "Endereço de cobrança inválido",
            (value = "") => Number(value) > 0
          ),
        paymentMethod: Yup.string()
          .required("Método de pagamento é obrigatório")
          .test(
            "Pagamento",
            "Método de Pagamento inválido",
            (value = "") => Number(value) > 0
          ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      history.push("/cliente/pedidos");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessage: { [key: string]: string } = {};

        error.inner.forEach((err) => {
          if (err.path) errorMessage[err.path] = err.message;
        });

        formRef.current?.setErrors(errorMessage);
      }
    }
  }

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
            <th></th>
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
            <td style={{ verticalAlign: "middle" }}>
              <IoMdTrash size={20} className="icon" /> Excluir
            </td>
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
            <td style={{ verticalAlign: "middle" }}>
              <IoMdTrash size={20} className="icon" /> Excluir
            </td>
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
            <td style={{ verticalAlign: "middle" }}>
              <IoMdTrash size={20} className="icon" /> Excluir
            </td>
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
              <Select name="document" defaultValue="" className="form-control">
                <option value="">Selecione</option>
                <option value={1}>RG: 00.000.000.0</option>
              </Select>
            </div>

            <div className="text-center mt-5">
              <h4>Selecione os Endereços</h4>
              <hr />
            </div>

            <div className="form-group">
              <label>Endereço de Entrega</label>
              <Select
                defaultValue=""
                className="form-control"
                name="deliveryAddress"
                onChange={(val) => {
                  if (val.currentTarget.value === "-1") setShowNewAddress(true);
                }}
              >
                <option value="">Selecione</option>
                <option value={1}>Endereço de Entrega 1</option>
                <option value={-1}>Cadastrar novo endereço</option>
              </Select>
            </div>

            <div className="form-group">
              <label>Endereço de Cobrança</label>
              <Select
                defaultValue=""
                name="billingAddress"
                className="form-control"
                onChange={(val) => {
                  if (val.currentTarget.value === "-1") setShowNewAddress(true);
                }}
              >
                <option value="">Selecione</option>
                <option value={1}>Endereço de Cobrança 1</option>
                <option value={-1}>Cadastrar novo endereço</option>
              </Select>
            </div>

            <div className="text-center mt-5">
              <h4>Opções de Pagamento</h4>
              <hr />
            </div>

            <div className="form-group">
              <label>Método de Pagamento</label>
              <Select
                defaultValue=""
                name="paymentMethod"
                className="form-control"
                onChange={(val) => {
                  if (val.currentTarget.value === "-1")
                    setShowNewPaymentMethod(true);
                }}
              >
                <option value="">Selecione</option>
                <option value={1}>****1234</option>
                <option value={-1}>Cadastrar novo cartão</option>
              </Select>
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
