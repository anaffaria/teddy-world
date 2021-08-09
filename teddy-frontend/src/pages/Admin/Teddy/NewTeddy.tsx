import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { useRef } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import InputText from "../../../components/Form/InputText";
import CreatableSelect from "../../../components/Form/ReactSelect";
import { Select } from "../../../components/Form/SelectInput";

interface TeddyForm {
  title: string;
  subtitle: string;
  price: number;
  categories: Array<string>;
  colors: Array<string>;
  size: string;
  reason?: string;
  status?: boolean;
}

export function NewTeddy() {
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
                  <label htmlFor="title">Imagens da Pelúcia</label>

                  <div className="custom-file">
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile04"
                    >
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
                  <label htmlFor="categories">Categoria da Pelúcia</label>
                  <CreatableSelect
                    name="categories"
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
                  <label htmlFor="colors">Cor da Pelúcia</label>
                  <CreatableSelect
                    name="colors"
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
