import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import * as Yup from "yup";
import InputText from "../../../components/Form/InputText";
import CreatableSelect from "../../../components/Form/ReactSelect";
import { useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { useRef, useState } from "react";
import { Form } from "@unform/web";
import { Select } from "../../../components/Form/SelectInput";
import { Category, Color, Teddy } from "../../../Types/Teddy";
import Swal from "sweetalert2";
import { SaveTeddy } from "../../../service/teddyService";

export function NewTeddy() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  async function handleSubmit(data: Teddy) {
    try {
      const schema = Yup.object().shape({
        image: Yup.string().required("Imagem é obrigatório"),
        title: Yup.string().required("Título é obrigatório"),
        subtitle: Yup.string().required("Subtítulo é obrigatório"),
        price: Yup.string().required("Preço é obrigatório"),
        // color: Yup.string().required("Cor é obrigatório"),
        // category: Yup.string().required("Categoria é obrigatório"),
        // amount: Yup.string().required("Quantidade é obrigatório"),
        size: Yup.string().required("Tamanho é obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      const onSuccess = () => {
        Swal.fire({
          icon: "success",
          title: "Dados Atualizados!",
        });
      };

      const onError = () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado por aqui!",
        });
      };

      data.category = data.category.map((category: any, index) => {
        return { id: category.value };
      }) as Category[];

      data.color = data.color.map((color: any, index) => {
        return { id: color.value };
      }) as Color[];

      SaveTeddy({ data, onSuccess, onError });
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
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <div className="d-flex ">
              <h3>Cadastrar Nova Pelúcia </h3>
            </div>

            <hr />
            <div className="d-flex mt-3">
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                className="form-style"
              >
                <div className="form-group">
                  <label htmlFor="image">Url da imagem:</label>
                  <InputText
                    name="image"
                    className="form-control"
                    placeholder="http://"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Nome da Pelúcia</label>
                  <InputText name="title" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="subtitle">Subtítulo da Pelúcia</label>
                  <InputText name="subtitle" className="form-control" />
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
                  <CreatableSelect
                    name="category"
                    multiple
                    options={[
                      { label: "Elefante", value: "1" },
                      { label: "Urso", value: "2" },
                      { label: "Panda", value: "3" },
                      { label: "Unicórnio", value: "4" },
                    ]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="color">Cor da Pelúcia</label>
                  <CreatableSelect
                    name="color"
                    multiple
                    options={[
                      { label: "Bege", value: "1" },
                      { label: "Branco", value: "2" },
                      { label: "Caramelo", value: "3" },
                      { label: "Cinza", value: "4" },
                      { label: "Colorido", value: "5" },
                    ]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <Select
                    name="status"
                    defaultValue=""
                    className="form-control"
                  >
                    <option value="">Selecione</option>
                    <option value={1}>Ativo</option>
                    <option value={0}>Inativo</option>
                  </Select>
                </div>

                <div className="form-group">
                  <label htmlFor="reason">Justificativa: </label>
                  <InputText name="reason" className="form-control" />
                </div>

                <div className="d-flex justify-content-between mt-5">
                  <button className="buttom">Criar Pelúcia</button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    Voltar
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
