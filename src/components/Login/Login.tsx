// Import
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import "./Login.css";


function Login() {
  return (
    <>
      <main className='register-bg'>
        <section className="container login-form m-auto h-100">
          <form className="box">
            <div className="header-logo mb-4 mt-2">
              <img src={logoImg} alt="logo" />
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label">E-mail</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                className="form-control"
              />
              <label className="form-label">Senha</label>
            </div>

            <div className="row justify-content-center">
              <button type="submit" className="buttom text-center">
                Entrar
              </button>
            </div>

            <div className="row mb-2 mt-4">
              <div className="col text-center">
                <a href="#!">Esqueci minha senha</a>
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
