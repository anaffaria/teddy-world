import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputText from "../Form/InputText";
import * as Yup from "yup";

interface RegisterProps {
  fullName: string;
  email: string;
  cpf: string;
  password: string;
  passwordConfirm: string;
}

function Register() {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  async function handleSubmit(data: RegisterProps) {
    try {
      const schema = Yup.object().shape({
        fullName: Yup.string().required("O nome é obrigatório."),
        email: Yup.string()
          .email("Digite um e-mail válido.")
          .required("E-mail é obrigatório."),
        cpf: Yup.string().min(11, "Digite um CPF válido."),
        password: Yup.string()
          .required("Senha é obrigatório.")
          .min(6, "Senha muito curta, mínimo 6 caractéres")
          .matches(
            /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
            "Necessita de caracter especial."
          ),
        passwordConfirm: Yup.string()
          .required("Confirmação de senha obrigatória.")
          .oneOf([Yup.ref("password"), null], "As senhas não conferem"),
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

  // TODO: standby function to fill iniital data of Form
  // add this code on Form properties -> initialData={initialData}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initialData: RegisterProps = {
    fullName: "Ana Caroline",
    email: "ana@test.com",
    cpf: "12345678901",
    password: "123",
    passwordConfirm: "123",
  };

  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <Form ref={formRef} onSubmit={handleSubmit} className="layout-box">
            <div className="form-outline mb-4 mt-3 w-100">
              <label className="form-label">Nome Completo:</label>
              <InputText
                name="fullName"
                id="form2Example1"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4 w-100">
              <label className="form-label">E-mail:</label>
              <InputText name="email" type="email" className="form-control" />
            </div>

            <div className="form-outline mb-4 w-100">
              <label className="form-label">CPF:</label>
              <InputText name="cpf" className="form-control" />
            </div>

            <div className="row mb-2">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label">Senha:</label>
                  <InputText
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-outline">
                  <label className="form-label">Confirmar senha:</label>
                  <InputText
                    name="passwordConfirm"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-2 mx-3 mt-4">
              <div className="col ">
                <Link to="/login">
                  <button type="submit" className="layout-buttom">
                    Voltar
                  </button>
                </Link>
              </div>
              <div className="col ">
                <button type="submit" className="layout-buttom">
                  Cadastrar
                </button>
              </div>
            </div>
          </Form>
        </section>
      </main>
    </>
  );
}

export default Register;
