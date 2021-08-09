import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { IoMdAddCircle } from "react-icons/io";
import "./CustomerEdit.css";
import { useRef, useState } from "react";
import { AddressForm } from "../Forms/AddressForm";
import { Form } from "@unform/web";
import InputText from "../Form/InputText";
import { FormHandles } from "@unform/core";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

interface CustomerEditProps {
  email: string;
  fullName: string;
  cpf: string;
  mainPhone: string;
  altPhone: string;
  birthDate: string;
}

function CustomerEdit() {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  async function handleSubmit(data: CustomerEditProps) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("O e-mail é obrigatório"),
        fullName: Yup.string().required("Nome é obrigatório"),
        cpf: Yup.string()
          .required("CPF é obrigatório")
          .test("CPF", "CPF inválido", (value = "") => {
            return /^\d+$/.test(value);
          })
          .min(11, "CPF inválido"),
        mainPhone: Yup.string().required("Telefone principal obrigatório"),
        birthDate: Yup.string().required("Data de nascimento é obrigatória"),
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
    <>
      <CustomerAccount>
        <div className="row">
          <div className="col-sm-8 ">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row ">
                <div className="col-12 col-sm-12 mt-2">
                  <label>E-mail</label>
                  <InputText
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                    name="email"
                  />
                </div>
                <div className="col-12 col-sm-12  mt-2">
                  <label>Nome</label>
                  <InputText
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    name="fullName"
                  />
                </div>

                <div className="col-6 col-sm-6  mt-2">
                  <label>CPF</label>
                  <InputText
                    type="text"
                    className="form-control"
                    placeholder="CPF"
                    name="cpf"
                  />
                </div>

                <div className="col-6 col-sm-6  mt-2">
                  <label>Data de nascimento:</label>
                  <InputText
                    type="date"
                    className="form-control"
                    name="birthDate"
                  />
                </div>

                <div className="col-6 col-sm-6  mt-2">
                  <label>Telefone principal</label>
                  <InputText
                    type="text"
                    name="mainPhone"
                    className="form-control"
                    placeholder="Telefone primario"
                  />
                </div>

                <div className="col-6 col-sm-6  mt-2">
                  <label>Telefone secundário</label>
                  <InputText
                    type="text"
                    name="altPhone"
                    className="form-control"
                    placeholder="Telefone secundário"
                  />
                </div>

                <div className="col mt-5 mb-5 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="buttom btn-block custumer_edit-buttom"
                  >
                    Alterar cadastro
                  </button>
                </div>
              </div>
            </Form>
          </div>

          <div className="col-4 col-sm-4">
            {!isOpenForm && (
              <div className={`${isOpenForm ? "d-none" : ""} border p-2`}>
                <span>Endereços de Entrega:</span>

                <ul className="m-0 p-0 mt-3">
                  <li>
                    Rua Carlos Barattino, n. 908 - Vila Nova Mogilar, Mogi das
                    Cruzes-SP - CEP 08773-600
                  </li>
                </ul>

                <hr />
                <span>Endereços de Cobrança:</span>
                <ul className="m-0 p-0 mt-3">
                  <li>
                    Rua Carlos Barattino, n. 908 - Vila Nova Mogilar, Mogi das
                    Cruzes-SP - CEP 08773-600
                  </li>
                </ul>
              </div>
            )}
            {isOpenForm && (
              <aside>
                <AddressForm className="mt-2" />
                <button
                  className="btn btn-secondary btn-block mt-4"
                  onClick={() => setIsOpenForm(false)}
                >
                  Cancelar
                </button>
              </aside>
            )}
            {!isOpenForm && (
              <div
                className="col-12 col-sm-12  mt-3 align-items-center mt-4 border"
                onClick={() => setIsOpenForm(true)}
              >
                <IoMdAddCircle
                  type="button"
                  className="col-12 align-items-center"
                  size={40}
                  color={"#FA98AF"}
                />
                <label className=" col-12 font-weight-bold text-center">
                  Adicionar novo endereço
                </label>
              </div>
            )}
          </div>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerEdit;
