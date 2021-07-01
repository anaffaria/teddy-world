import { Link } from "react-router-dom";
import Gif from "../../components/RememberPass/img/gif.gif";
import "./RememberPass.css";

function RebemberPass() {
  return (
    <>
      <main className="register-bg">
        <section className="container login-form m-auto h-100">
          <form className="box-remember">
            <div className="header-logo">
              <img src={Gif} alt="gif" />
            </div>
            <div className="form-outline mb-5 text-center">
              <h4>Esqueci minha Senha</h4>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">E-mail:</label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="row mb-2 mx-3 mt-10">
              <div className="col ">
                <Link to="/login">
                  <button type="submit" className="buttom text-center ">
                    Voltar
                  </button>
                </Link>
              </div>
              <div className="col ">
                <button type="submit" className="buttom text-center">
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default RebemberPass;
