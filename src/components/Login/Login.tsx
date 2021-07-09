// Import
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

import "./Login.css";
function Login() {
  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <form className="layout-box">
            <div className="header-logo mb-4 mt-2">
              <img src={logoImg} alt="logo" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label">E-mail</label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Senha</label>
              <input
                type="password"
                id="form2Example2"
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
                <Link to="/cliente">
                  <button type="submit" className="layout-buttom text-center ">
                    Entrar
                  </button>
                </Link>
              </div>
            </div>

            <div className="row mb-2 mt-4">
              <div className="col text-center">
                <Link to="/recuperarsenha">
                  <a href="#!">Esqueci minha senha</a>
                </Link>
              </div>
            </div>

            <div className="col text-center">
              <Link to="/cadastro">
                <span>Ainda não sou cliente</span>
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
