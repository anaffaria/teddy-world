import { useRef } from "react";
import { Form } from "@unform/web";
import InputText from "../Form/InputText";
import { Select } from "../Form/SelectInput";
import { useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import axios from "axios";
import { UfToName } from "../Utils/ParseUfToName";

enum AddressType {
  delivery = "delivery",
  billing = "billing",
}

interface CustomerAddress {
  cep: string;
  street: string;
  complement: string;
  number: string;
  state: string;
  city: string;
  addressType: AddressType;
}

interface AddressFormProps {
  className?: string;
}

export function AddressForm({ className }: AddressFormProps) {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  function fillAddress(value: string) {
    if (value.trim().length > 7) {
      axios
        .get(`https://viacep.com.br/ws/${value}/json/`)
        .then((response) => {
          const data = response.data;
          formRef.current?.setData({
            street: data.logradouro,
            city: data.localidade,
            state: UfToName(data.uf)
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  async function handleSubmit(data: CustomerAddress) {
    try {
      const schema = Yup.object().shape({
        cep: Yup.string().required("CEP é obrigatório"),
        street: Yup.string().required("Rua é obrigatório"),
        number: Yup.string().required("Número é obrigatório"),
        state: Yup.string().required("Estado é obrigatório"),
        city: Yup.string().required("Cidade é obrigatório"),
        addressType: Yup.string().required("Selecione o tipo do endereço"),
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
    <Form className={className} onSubmit={handleSubmit} ref={formRef}>
      <div className="form-group">
        <label htmlFor="cep">CEP</label>
        <InputText
          name="cep"
          className="form-control"
          onChange={(val) => {
            fillAddress(val.currentTarget.value);
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Logradouro</label>
        <InputText name="street" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="number">Número</label>
        <InputText name="number" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="complement">Complemento</label>
        <InputText name="complement" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="state">Estado</label>
        <InputText name="state" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="city">Cidade</label>
        <InputText name="city" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="addressType">Tipo do Endereço</label>
        <Select name="addressType" className="form-control" defaultValue="">
          <option value="">Selecione</option>
          <option value={AddressType.billing}>Cobrança</option>
          <option value={AddressType.delivery}>Entrega</option>
        </Select>
      </div>

      <button className="buttom btn-block">Adicionar</button>
    </Form>
  );
}
