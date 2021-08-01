import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import InputText from "../Form/InputText";
import { Select } from "../Form/SelectInput";
import * as Yup from "yup";

import "./NewTeddyForm.css";

interface TeddyForm {
  title: string;
  subtitle: string;
  price: number;
  categories: Array<string>;
  colors: Array<string>;
  size: string;
}

export function NewTeddyForm() {
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
        <label htmlFor="title">Imagens da Pelúcia</label>

        <div className="custom-file">
          <label className="custom-file-label" htmlFor="inputGroupFile04">
            Escolha as imagens
          </label>
          <InputText
            type="file"
            className="custom-file-input"
            id="inputGroupFile04"
            name="images"
            multiple
            aria-describedby="inputGroupFileAddon04"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="title">Nome da Pelúcia</label>
        <InputText name="title" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="subTitle">Subtítulo da Pelúcia</label>
        <InputText name="subTitle" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="price">Preço da Pelúcia</label>
        <InputText name="price" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="size">Tamanho da Pelúcia</label>
        <InputText name="size" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoria da Pelúcia</label>
        <Select name="category" className="form-control" multiple>
          <option>Elefante</option>
          <option>Urso</option>
          <option>Panda</option>
          <option>Unicórnio</option>
        </Select>
      </div>

      <div className="form-group">
        <label htmlFor="color">Cor da Pelúcia</label>
        <Select name="color" className="form-control" multiple>
          <option>Bege</option>
          <option>Branco</option>
          <option>Caramelo</option>
          <option>Cinza</option>
          <option>Marrom</option>
          <option>Colorido</option>
        </Select>
      </div>

      <div className="d-flex justify-content-between mt-5">
        <button className="buttom">Criar Pelúcia</button>
        <button className="btn btn-secondary">Voltar</button>
      </div>
    </Form>
  );
}
