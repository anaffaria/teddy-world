import { useRef } from "react";
import { Form } from "@unform/web";
import InputText from "../Form/InputText";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import * as CardValidator from "card-validator";

interface CreditCard {
  cardHolder: string;
  creditCardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardSecurity: string;
}

export function CreditCardForm() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  async function handleSubmit(data: CreditCard) {
    try {
      const schema = Yup.object().shape({
        cardHolder: Yup.string().required("Nome do titular é obrigatório."),
        creditCardNumber: Yup.string()
          .required("Número do cartão é obrigatório")
          .test(
            "Número do cartão de crédito",
            "Número do cartão de crédito é inválido",
            (value) => CardValidator.number(value).isValid
          ),
        cardMonth: Yup.string()
          .required("Mês do cartão é obrigatório")
          .test(
            "Mês do cartão de crédito",
            "Cartão de crédito é inválido",
            (value) =>
              CardValidator.expirationDate(value + data.cardYear).isValid
          ),
        cardYear: Yup.string()
          .required("Ano do cartão é obrigatório")
          .test(
            "Ano do cartão de crédito",
            "Cartão de crédito é inválido",
            (value) =>
              CardValidator.expirationDate(data.cardMonth + value).isValid
          ),
        cardSecurity: Yup.string()
          .required("CVV obrigatório")
          .test(
            "CVV",
            "Código de segurança é inválido",
            (value) => CardValidator.cvv(value).isValid
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
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="creditCardNumber">Número do Cartão de Crédito</label>
        <InputText
          type="text"
          name="creditCardNumber"
          className="form-control"
          placeholder="1234-1234-1234-1234"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cardHolder">Nome do Títular</label>
        <InputText
          type="text"
          className="form-control"
          name="cardHolder"
          placeholder="Nome do Titular do Cartão"
        />
      </div>

      <div className="d-flex">
        <div className="form-group mr-3">
          <label htmlFor="cardMonth">Mês</label>
          <InputText
            type="number"
            className="form-control"
            name="cardMonth"
            step="1"
            min="1"
            placeholder="12"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardYear">Ano</label>
          <InputText
            type="number"
            className="form-control"
            name="cardYear"
            step="1"
            min="1"
            placeholder="2021"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cardSecurity">CVV</label>
        <InputText
          className="form-control"
          name="cardSecurity"
          placeholder="0000"
        />
      </div>

      <button className="buttom btn-block mt-5">Adicionar Cartão</button>
    </Form>
  );
}
