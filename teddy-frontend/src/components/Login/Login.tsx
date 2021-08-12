import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Form } from "@unform/web";

import "./Login.css";
import InputText from "../Form/InputText";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: LoginProps) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido.")
          .required("E-mail é obrigatório."),
        password: Yup.string().required("Senha é obrigatória."),
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
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <Form className="layout-box" onSubmit={handleSubmit} ref={formRef}>
            <div className="header-logo mb-4 mt-2">
              <img src={logoImg} alt="logo" />
            </div>

            <div className="col-12 mb-4 w-100">
              <label className="form-label">E-mail</label>
              <InputText
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </div>

            <div className="col-12 mb-4 w-100">
              <label className="form-label">Senha</label>
              <InputText
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
            </div>

            <div className="row mb-2 mx-3 mt-5 justify-content-around">
              <div>
                <Link to="/">
                  <button type="submit" className="layout-buttom">
                    Voltar
                  </button>
                </Link>
              </div>
              <div>
                <button type="submit" className="layout-buttom">
                  Entrar
                </button>
              </div>
            </div>


            <div className="row mb-2 mt-4">
              <div className="col text-center">
                <Link to="/recuperarsenha">Esqueci minha senha</Link>
              </div>
            </div>

            <div className="col text-center">
              <Link to="/cadastro">
                <span>Ainda não sou cliente</span>
              </Link>
            </div>
          </Form>
        </section>
      </main>
    </>
  );
}

export default Login;
