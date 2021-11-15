import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import { IoIosArrowBack, IoMdTrash } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { setTimeout } from "timers";
import * as Yup from "yup";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";
import {
  CalculateTax,
  FindCoupon,
  RemoveItem,
  UpdateItemAmount,
} from "../../service/cartService";
import { FinishCheckout } from "../../service/checkoutService";
import { GetCustomer } from "../../service/customerService";
import { CheckoutType, PaymentMethod } from "../../Types/checkout";
import { Coupon } from "../../Types/coupon";
import InputText from "../Form/InputText";
import { Select } from "../Form/SelectInput";
import { AddressForm } from "../Forms/AddressForm";
import { CreditCardForm } from "../Forms/CreditCardForm";
import { ModalTeddy } from "../Modal/Modal";
import "./Checkout.css";

interface CheckoutSubmit {
  document: string;
  deliveryAddress: string;
  billingAddress: string;
  paymentMethodList: PaymentMethod[];
}

function Checkout() {
  const [showNewPaymentMethod, setShowNewPaymentMethod] = useState(false);
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(1);
  const [shippingTax, setShippingTax] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const [coupon, setCoupon] = useState<Coupon[]>();
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;

  const handleClosePayment = () => setShowNewPaymentMethod(false);
  const handleCloseAddress = () => setShowNewAddress(false);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const token = localStorage.getItem("token") || "";

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

    const onError = (err: AxiosError) => {
      if (err.response?.status === 401) {
        Swal.fire({
          icon: "warning",
          title: "Para acessar esse recurso é necessário realizar login",
        });

        history.push("/login");
      }
    };

    GetCustomer({
      id: `${customer?.id}`,
      onSuccess,
      token,
      onError,
    });
  }, [customer?.id, setCustomer, token, history]);

  useEffect(() => {
    setSubtotal((prev) => {
      let totalCartItemsValue = 0;

      let calc;

      for (let i = 0; i < customer?.cart?.itemDTOS?.length!; i++) {
        const element = customer?.cart?.itemDTOS?.[i];
        totalCartItemsValue =
          totalCartItemsValue +
          element?.amount! * element?.teddyItemDTO?.priceFactory!;
      }
      if (coupon) {
        calc = totalCartItemsValue + shippingTax - (coupon[0]?.value! || 0);
        console.log(calc);
        if (calc < 0) {
          Swal.fire({
            icon: "warning",
            title: "O desconto não pode o valor total",
          });
          return prev;
        }
        return calc;
      }
      calc = Number((totalCartItemsValue + shippingTax).toFixed(2));

      return calc;
    });
  }, [customer, shippingTax, coupon]);

  function handleTax(postalCode: string) {
    const address = customer?.addressList?.filter(
      (el) => Number(el.id) === Number(postalCode)
    );

    Swal.fire({
      title: "Buscando valor do frete",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });

    const onSuccess = (resp: any) => {
      setShippingTax(resp.data);
      console.log(resp);
      Swal.close();
    };

    const onError = (err: any) => {
      console.log(err);
      Swal.close();
    };

    CalculateTax({
      onSuccess,
      onError,
      data: {
        postalCode: address?.[0]?.postalCode,
      },
      token,
    });
  }

  async function handleSubmit(data: CheckoutSubmit) {
    try {
      const schema = Yup.object().shape({
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
        paymentMethodList: Yup.array().test(
          "Dados inválidos! Verifique as informações do cartão e os valores inseridos",
          "Dados inválidos! Verifique as informações do cartão e os valores inseridos",
          (value) => {
            if (subTotal - customer?.wallet?.value! <= 0) return true;
            const paymentMethods = value as PaymentMethod[];
            let paymentMethodTotal = 0;

            paymentMethods.forEach((paymentMethod) => {
              if (paymentMethod!.creditCard!.id!.length! <= 0) return false;

              paymentMethodTotal += Number(paymentMethod.paymentValue);
            });

            if (Number(paymentMethodTotal.toFixed(2)) !== Number((subTotal - customer?.wallet?.value!).toFixed(2)))
              return false;

            return true;
          }
        ),
      });
      const addresses = customer?.addressList?.filter((address) => {
        return (
          Number(address.id) === Number(data.deliveryAddress) ||
          Number(address.id) === Number(data.billingAddress)
        );
      });

      const finalData: CheckoutType = {
        shippingTax,
        customer: customer,
        addressList: addresses,
        total: subTotal,
        paymentMethodList: data.paymentMethodList,
      };

      if (coupon?.[0]?.id) {
        finalData.coupon = coupon[0];
      }

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      const onSuccess = () => {
        Swal.fire({
          icon: "success",
          title: "Pedido realizado com sucesso!",
        });

        history.push(`/cliente/${customer?.id}/pedidos`);
      };

      const onError = (err: any) => {
        console.log(err);
      };

      FinishCheckout({
        onSuccess,
        onError,
        token,
        id: `${customer?.id}`,
        data: finalData,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        const errorMessage: { [key: string]: string } = {};

        error.inner.forEach((err) => {
          // Logic to send error to each field of paymentValue
          if (Array.isArray(err?.params?.originalValue)) {
            err?.params?.originalValue.forEach((value, index) => {
              if (err.path)
                errorMessage[`${err.path}[${index}].paymentValue`] =
                  err.message;
            });
          }

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
      id: `${customer?.id}`,
    });
  }

  function handleChangeAmount(amount: string, itemID: number) {
    Swal.fire({
      title: "Aguarde um momento",
      html: "<p>Atualizando quantidade.</p><img width=150 height=150 src='https://i.pinimg.com/originals/2f/74/25/2f742539b8b1ad66d11d56600b27c8c3.gif'></img>",
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    const onSuccess = () => {
      setTimeout(() => {
        Swal.close();
      }, 1000);
    };
    const onError = () => {
      Swal.fire({
        icon: "error",
        title: "Falha na operação",
      });
    };

    UpdateItemAmount({
      id: `${customer?.id}`,
      token,
      onSuccess,
      onError,
      data: {
        amount,
        id: itemID,
      },
    });
  }

  function renderCartItems() {
    return customer?.cart?.itemDTOS?.map((el, index) => (
      <tr key={el.id}>
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
            onBlur={(e) => {
              setCustomer((prev) => {
                const newCustomer = Object.assign({}, prev);

                newCustomer!.cart!.itemDTOS! = newCustomer.cart!.itemDTOS.map(
                  (item) => {
                    if (item.id === el.id) {
                      const userAmount = e.target.value;

                      if (Number(userAmount) <= 0) {
                        e.target.value = `${item.amount}`;
                        return item;
                      }

                      item.amount = Number(userAmount);
                      handleChangeAmount(userAmount, el.id!);
                    }
                    return item;
                  }
                );

                return newCustomer;
              });
            }}
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
          <span
            style={{ cursor: "pointer" }}
            onClick={() => deleteCartItem(el?.id)}
          >
            <IoMdTrash size={20} className="icon" /> Excluir
          </span>
        </td>
      </tr>
    ));
  }

  function renderAddresses(type: number) {
    return customer?.addressList?.map((address, index) => {
      if (address?.addressType === type) return undefined;
      return (
        <option key={index} value={address?.id}>
          {address.street}
        </option>
      );
    });
  }

  function searchCoupon(value: string) {
    const onSuccess = (resp: any) => {
      console.log(resp);
      setCoupon(resp.data);
    };

    const onError = (err: any) => {
      console.log(err);
    };

    FindCoupon({
      data: { code: value },
      onError,
      onSuccess,
      token,
    });
  }

  function renderPaymentMethods() {
    const elements: any[] = [];
    for (let i = 0; i < paymentAmount; i++) {
      elements.push(
        <>
          <div className="form-group">
            <label>Método de Pagamento</label>
            <Select
              defaultValue=""
              name={`paymentMethodList[${i}].creditCard.id`}
              className="form-control"
              onChange={(val) => {
                if (val.currentTarget.value === "-1") {
                  setShowNewPaymentMethod(true);
                  val.currentTarget.value = "";
                }
              }}
            >
              <option value="">Selecione</option>
              {customer?.creditCardList?.map((creditCard, index) => {
                return (
                  <option value={creditCard.id} key={index}>
                    ****{creditCard.creditCardNumber} - {creditCard.cardFlag}
                  </option>
                );
              })}
              <option value={-1}>Cadastrar novo cartão</option>
            </Select>
          </div>

          <div className="form-group">
            <label>Valor do Pagamento</label>
            <InputText
              name={`paymentMethodList[${i}].paymentValue`}
              className="form-control"
              type="number"
              step="0.01"
            />
          </div>
        </>
      );
    }
    return elements;
  }

  function renderWalletAmountDiscount() {
    if (!customer?.wallet?.value) return 0;

    let value = Number(customer.wallet.value - subTotal);

    if (value < 0) return 0;

    return value.toFixed(2);
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

      <div className="d-flex justify-content-between">
        <Link to={"/produtos"}>
          <div className="goBack ml-3">
            <IoIosArrowBack size={35} />
          </div>
        </Link>
      </div>

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
                  if (val.currentTarget.value === "-1") {
                    setShowNewAddress(true);
                    val.currentTarget.value = "";
                    return;
                  }
                  handleTax(val.target.value);
                }}
              >
                <option value="">Selecione</option>
                {renderAddresses(0)}
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
                  if (val.currentTarget.value === "-1") {
                    setShowNewAddress(true);
                    val.currentTarget.value = "";
                  }
                }}
              >
                <option value="">Selecione</option>
                {renderAddresses(1)}
                <option value={-1}>Cadastrar novo endereço</option>
              </Select>
            </div>

            <div className="text-center mt-5">
              <h4>Opções de Pagamento</h4>
              <hr />
            </div>

            {paymentAmount && renderPaymentMethods()}

            <span
              onClick={() => {
                setPaymentAmount((prev) => prev + 1);
              }}
              className="btn btn-block btn-success"
            >
              Adicionar mais um cartão
            </span>

            <div className="d-flex">
              <button className="button-checkout">Finalizar Compra</button>
            </div>
          </div>
        </Form>

        <aside className="checkout-info col-sm-12 col-md-3">
          <div className="text-center">
            <h4>Opções de desconto</h4>
            <hr />
          </div>
          <div className="form-group mt-2">
            <label>Cupom de Desconto</label>
            <input
              id="cupon"
              className="form-control"
              onChange={(e) => {
                searchCoupon(e.target.value);
              }}
            />
          </div>

          <div className="text-center">
            <h4>Resumo da compra</h4>
            <hr />
          </div>

          <div className="d-flex space-between mt-2 mb-4">
            <strong className="w-100">Saldo na carteira</strong>
            <span>R$:</span>
            <span>{customer?.wallet?.value}</span>
          </div>

          <div className="d-flex space-between mt-2">
            <strong className="w-100">Valor do Frete</strong>
            <span>R$:</span>
            <span>{shippingTax}</span>
          </div>

          <div className="d-flex space-between mt-2 mb-4">
            <strong className="w-100">Subtotal</strong>
            <div className="d-flex">
              <span>R$:</span>
              <span>{subTotal}</span>
            </div>
          </div>

          {coupon && (
            <div className="d-flex space-between mt-2">
              <strong className="w-100">Valor do desconto</strong>
              <span>R$:</span>
              <span>{coupon[0]?.value}</span>
            </div>
          )}

          <div>
            <div className="d-flex space-between mt-2">
              <strong className="w-100">Valor descontado na carteira</strong>
              <span>R$:</span>
              <span>
                {customer?.wallet?.value! < subTotal
                  ? customer?.wallet?.value!
                  : subTotal}
              </span>
            </div>

            <div className="d-flex space-between mt-2 mb-4">
              <strong className="w-100">Saldo restante na carteira</strong>
              <span>R$:</span>
              <span>{renderWalletAmountDiscount()}</span>
            </div>

            <div className="d-flex space-between mt-2">
              <strong className="w-100">Total</strong>
              <div className="d-flex">
                <span>R$:</span>
                <span>
                  {subTotal - customer?.wallet?.value! < 0
                    ? 0
                    : Number(subTotal - customer?.wallet?.value!).toFixed(2)}
                </span>
              </div>
            </div>

            <hr />
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
