import { Link } from "react-router-dom";
import Gif from "../../components/RememberPass/img/gif.gif";

function RebemberPass() {
  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <form className="layout-box">
            <div className="header-logo mt-5">
              <img src={Gif} alt="gif" />
            </div>
            <div className="form-outline mb-5 text-center">
              <h4>Esqueci minha Senha</h4>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">E-mail:</label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="row mb-2 mx-3 mt-5">
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
          </form>
        </section>
      </main>
    </>
  );
}

export default RebemberPass;
