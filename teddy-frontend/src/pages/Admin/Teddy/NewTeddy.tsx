import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import * as Yup from "yup";
import InputText from "../../../components/Form/InputText";
import CreatableSelect from "../../../components/Form/ReactSelect";
import { Link } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { useEffect, useRef, useState } from "react";
import { Form } from "@unform/web";
import { Select } from "../../../components/Form/SelectInput";
import { Category, Color, Teddy } from "../../../Types/Teddy";
import Swal from "sweetalert2";
import { GetTeddy, SaveTeddy } from "../../../service/teddyService";
import { useParams } from "react-router-dom";
import { ListColor } from "../../../service/colorService";
import { ListCategory } from "../../../service/categoryService";

export function NewTeddy() {
  const formRef = useRef<FormHandles>(null);
  const { id } = useParams<{ id: string }>();

  const [listCategory, setListCategory] = useState<Array<Category>>();
  const [listColor, setListColor] = useState<Array<Color>>();

  useEffect(() => {
    if (id) {
      GetTeddy({ id: id })
        .then((resp) => {
          if (resp) {
            const teddy = Object.assign(resp, {});

            teddy.category = resp.category.map((el) => {
              return {
                label: el.name,
                value: el.id,
              };
            }) as Category[];

            teddy.color = resp.color.map((el) => {
              return {
                label: el.name,
                value: el.id,
              };
            }) as Color[];

            formRef.current?.setData(teddy);
          }
        })
        .catch((err) => console.log(err));
    }

    ListColor({})
      .then((resp) => {
        setListColor(resp);
      })
      .catch((err) => console.log(err));

    ListCategory({})
      .then((resp) => {
        setListCategory(resp);
      })
      .catch((err) => console.log(err));
  }, [id]);

  async function handleSubmit(data: Teddy) {
    try {
      const schema = Yup.object().shape({
        image: Yup.string().required("Imagem é obrigatório"),
        title: Yup.string().required("Título é obrigatório"),
        subtitle: Yup.string().required("Subtítulo é obrigatório"),
        priceReal: Yup.string().required("Preço real é obrigatório"),
        priceFactory: Yup.string().required("Preço de fabrica é obrigatório"),
        // color: Yup.string().required("Cor é obrigatório"),
        // category: Yup.string().required("Categoria é obrigatório"),
        amount: Yup.string().required("Quantidade é obrigatório"),
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

      const onError = (resp: string) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${resp}`,
        });
      };

      data.category = data.category.map((category: any, index) => {
        return { id: category.value };
      }) as Category[];

      data.color = data.color.map((color: any, index) => {
        return { id: color.value };
      }) as Color[];

      if (id) data.id = Number(id);

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
              <h3>{id? "Atualizar": "Criar nova"} Pelúcia </h3>
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
                  <label htmlFor="title">Nome</label>
                  <InputText name="title" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="subtitle">Subtítulo</label>
                  <InputText name="subtitle" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="priceReal">Preço de Varejo</label>
                  <InputText name="priceReal" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="priceFactory">Preço de Fabrica</label>
                  <InputText name="priceFactory" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="amount">Quantidade de Estoque</label>
                  <InputText name="amount" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="size">Tamanho</label>
                  <Select
                    name="size"
                    id="size"
                    className="form-control select_product"
                  >
                    <option value="">Selecione</option>
                    <option value="oneSize">0cm a 20cm</option>
                    <option value="twoSize">21cm a 40cm</option>
                    <option value="treeSize">41cm a 60cm</option>
                    <option value="fourSize">61cm a 90cm</option>
                    <option value="fiveSize">91cm a 2metros</option>
                  </Select>
                </div>

                <div className="form-group">
                  <label htmlFor="category">Categoria</label>
                  <CreatableSelect
                    id="cetegory"
                    name="category"
                    multiple
                    options={listCategory?.map((el) => {
                      return { label: el.name, value: el.id };
                    })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="color">Cor</label>
                  <CreatableSelect
                    id="color"
                    name="color"
                    multiple
                    options={listColor?.map((el) => {
                      return { label: el.name, value: el.id };
                    })}
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
                  <button className="buttom">{id? "Editar" : "Criar"} Pelúcia</button>
                  <Link className="btn btn-secondary" to="/admin/pelucias">
                    Voltar
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
