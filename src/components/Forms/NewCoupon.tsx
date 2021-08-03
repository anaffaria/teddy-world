import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import InputText from "../Form/InputText";
import * as Yup from "yup";

import "../../assets/Global.css";

interface TeddyForm {
  title: string;
  subtitle: string;
  price: number;
  categories: Array<string>;
  colors: Array<string>;
  size: string;
}

export function NewCouponForm() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  async function handleSubmit(data: TeddyForm) {
    console.log(data);

    try {
      const schema = Yup.object().shape({});

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      // history.push("/cliente/pedidos");
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
    <Form ref={formRef} onSubmit={handleSubmit} className="form-style">
      <div className="form-group">
        <label htmlFor="code">Código do cupom</label>
        <InputText name="code" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="value">Valor do cupom</label>
        <InputText name="value" className="form-control" />
      </div>

      <div className="d-flex justify-content-between mt-5">
        <button className="buttom">Criar Cupom</button>
        <button className="btn btn-secondary">Voltar</button>
      </div>
    </Form>
  );
}
