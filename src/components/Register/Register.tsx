import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <form className="layout-box">
            <div className="form-outline mb-4 mt-3">
              <label className="form-label">Nome Completo:</label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">E-mail:</label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">CPF:</label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="row mb-2">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label">Senha:</label>
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-outline">
                  <label className="form-label">Confirmar senha:</label>
                  <input
                    type="text"
                    id="form3Example2"
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
                <Link to="/cliente">
                  <button type="submit" className="layout-buttom">
                    Cadastrar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
