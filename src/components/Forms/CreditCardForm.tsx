import { useRef } from "react";
import { Form } from "@unform/web";
import InputText from "../Form/InputText";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import * as CardValidator from "card-validator";
import { Select } from "../Form/SelectInput";
import { useState } from "react";

interface CreditCard {
  cardHolder: string;
  creditCardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardSecurity: string;
  cardFavourite: boolean;
  cardFlag: string;
}

export function CreditCardForm() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [cardFlag, setCardFlag] = useState<string | undefined>("")

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
        cardFlag: Yup.string().required("Bandeira é obrigatória")
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

  function cardFlags(number: string) {
    var re: { [key: string]: RegExp } = {
      electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
      maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
      dankort: /^(5019)\d+$/,
      interpayment: /^(636)\d+$/,
      unionpay: /^(62|88)\d+$/,
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    }

    for (var key in re) {
      if (re[key].test(number)) {
        return key.toLocaleUpperCase()
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
          id="creditCardNumber"
          className="form-control"
          placeholder="1234-1234-1234-1234"
          onChange={(val) => {
            if (val.currentTarget.value?.length > 14) {
              let number = val.currentTarget.value.replaceAll("-", '').replaceAll(/^\s+|\s+$/g, "");
              let flag = cardFlags(number);
              setCardFlag(flag);
            }
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cardHolder">Nome do Títular</label>
        <InputText
          type="text"
          className="form-control"
          name="cardHolder"
          id="cardHolder"
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
            id="cardMonth"
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
            id="cardYear"
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
          id="cardSecurity"
          placeholder="0000"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cardSecurity">Bandeira</label>
        <InputText
          className="form-control"
          name="cardFlag"
          id="cardFlag"
          placeholder="MasterCard"
          defaultValue={cardFlag}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cardFavourite">
          Deseja tornar como cartão preferencial?
        </label>
        <Select className="form-control" name="cardFavourite" defaultValue={0}>
          <option value={1}>Sim</option>
          <option value={0}>Não</option>
        </Select>
      </div>

      <button className="buttom btn-block mt-5" id="addCard" >Adicionar Cartão</button>
    </Form>
  );
}
