import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { Link, useHistory } from "react-router-dom";
import "./CustomerPass.css";
import InputText from "../Form/InputText";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Form } from "@unform/web";
import Swal from "sweetalert2";

interface CustumerPassProps {
  password: string;
  newPassword: string;
  CompareNewPassword: string;
}

function CustomerPass() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: CustumerPassProps) {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .matches(
            /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
            "Necessita de caracter especial."
          )
          .min(6, "Senha muito curta, mínimo 8 caractéres")
          .required("Senha é obrigatório."),
        newPassword: Yup.string()
          .matches(
            /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
            "Necessita de caracter especial."
          )
          .min(6, "A senha deve conter 8 dígitos")
          .required("Nova Senha é obrigatória."),
        CompareNewPassword: Yup.string()
          .matches(
            /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
            "Necessita de caracter especial."
          )
          .min(6, "A senha deve conter 8 dígitos")
          .required("Confirmação da senha é obrigatória.")
          .oneOf([Yup.ref("newPassword"), null], "As senhas não conferem"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      Swal.fire({
        icon: "success",
        title: "Dados Alterados com sucesso!",
        text: "",
        didClose: () => {
          history.push("/cliente/alterar_senha");
        },
      });

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
          <Form
            className="form-row d-flex col-sm-12"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="col-12 col-sm-4">
              <label>Digite sua senha atual</label>
              <InputText
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="senha atual"
              />
            </div>

            <div className="col-6 col-sm-4">
              <label>Digite a nova senha</label>
              <InputText
                type="password"
                name="newPassword"
                id="newPassword"
                className="form-control"
                placeholder="nova senha"
              />
            </div>

            <div className="col-6 col-sm-4">
              <label>Repita sua nova senha</label>
              <InputText
                type="password"
                name="CompareNewPassword"
                className="form-control"
                placeholder="repita a nova senha"
              />
            </div>

            <div className="col-sm-3 mt-5 mb-5">
              <button
                type="submit"
                className="buttom btn-block custumer_edit-buttom"
              >
                Salvar Alterações
              </button>
            </div>
          </Form>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerPass;
