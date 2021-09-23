import { useEffect, useRef, useState } from "react";
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
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";
import { GetCustomer } from "../../service/customerService";
import Swal from "sweetalert2";
import InputText from "../Form/InputText";
import { isNamedExports } from "typescript";
import { RemoveItem } from "../../service/cartService";

interface CheckoutSubmit {
  document: string;
  deliveryAddress: string;
  billingAddress: string;
  paymentMethod: string;
}

function Checkout() {
  const [showNewPaymentMethod, setShowNewPaymentMethod] = useState(false);
  const [showNewAddress, setShowNewAddress] = useState(false);
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;

  const handleClosePayment = () => setShowNewPaymentMethod(false);
  const handleCloseAddress = () => setShowNewAddress(false);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const token = sessionStorage.getItem("token") || "";

  useEffect(() => {
    Swal.fire({
      title: "Aguarde um momento",
      html: "<p>Estamos buscando suas informações.</p><img width=150 height=150 src='https://i.pinimg.com/originals/2f/74/25/2f742539b8b1ad66d11d56600b27c8c3.gif'></img>",
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    const onSuccess = (resp: any) => {
      setTimeout(() => {
        Swal.close();
      }, 2000);

      setCustomer(resp.data);
    };

    GetCustomer({
      id: `${customer?.id}`,
      onSuccess,
      token,
    });
  }, [customer?.id, setCustomer, token]);

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

  async function deleteCartItem(id?: number) {
    const onSuccess = () => {
      Swal.fire({
        icon: "success",
        title: "Removido com sucesso",
      });

      setCustomer((prev) => {
        const newCustomer = Object.assign({}, prev);
        newCustomer.cart!.itemDTOS! =
          newCustomer.cart?.itemDTOS.filter((el) => el.id !== id) || [];

        return newCustomer;
      });
    };
    const onError = () => {
      Swal.fire({
        icon: "error",
        title: "Falha na operação",
      });
    };

    RemoveItem({
      onSuccess,
      onError,
      data: {
        id,
      },
      token,
      id: `${customer?.id}`
    });
  }

  function renderCartItems() {
    return customer?.cart?.itemDTOS?.map((el, index) => (
      <tr key={index}>
        <td style={{ verticalAlign: "middle" }}>{index}</td>
        <td className="d-flex">
          <figure style={{ width: 73, height: 73, margin: 0 }}>
            <img
              src={el.teddyItemDTO?.image}
              alt={el.teddyItemDTO?.title}
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
          <span className="mt-auto mb-auto ml-3">{el.teddyItemDTO?.title}</span>
        </td>
        <td style={{ verticalAlign: "middle" }}>
          <input
            className="form-control"
            type="number"
            min={1}
            max={el.teddyItemDTO.amountAvailable}
            defaultValue={el?.amount}
          />
        </td>
        <td style={{ verticalAlign: "middle" }}>
          R$: {el.teddyItemDTO?.priceFactory}
        </td>
        <td style={{ verticalAlign: "middle" }}>
          R$:{" "}
          {el?.teddyItemDTO?.priceFactory
            ? el?.teddyItemDTO?.priceFactory * el.amount
            : 0}
        </td>
        <td style={{ verticalAlign: "middle" }}>
          <span onClick={() => deleteCartItem(el?.id)}>
            <IoMdTrash size={20} className="icon" /> Excluir
          </span>
        </td>
      </tr>
    ));
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
        <tbody>{renderCartItems()}</tbody>
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
              <label>CPF: </label>
              <InputText
                name="cpf"
                defaultValue={customer?.cpf}
                className="form-control"
                disabled
              />
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
