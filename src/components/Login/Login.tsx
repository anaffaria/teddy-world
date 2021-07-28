import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Form } from "@unform/web";

import "./Login.css";
import InputText from "../Form/InputText";
interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const history = useHistory();

  function handleSubmit(data: LoginProps) {
    console.info(data);
    history.push("/cliente/pedidos");
  }

  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <Form className="layout-box" onSubmit={handleSubmit}>
            <div className="header-logo mb-4 mt-2">
              <img src={logoImg} alt="logo" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">E-mail</label>
              <InputText
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Senha</label>
              <InputText
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
            </div>

            <div className="row mb-2 mx-3">
              <div className="col ">
                <Link to="/">
                  <button type="submit" className="layout-buttom text-center ">
                    Voltar
                  </button>
                </Link>
              </div>
              <div className="col ">
                <button type="submit" className="layout-buttom text-center ">
                  Entrar
                </button>
              </div>
            </div>

            <div className="row mb-2 mt-4">
              <div className="col text-center">
                <Link to="/recuperarsenha">
                  Esqueci minha senha
                </Link>
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
