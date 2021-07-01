import { Link } from "react-router-dom";

function ServiceClient() {
  return (
    <>
      <main className="register-bg">
        <section className="container login-form m-auto h-100">
          <form className="box-register">
            <div className="form-outline mb-3 text-center">
              <h5>Central de atendimento</h5>
            </div>
            <div className="row ">
              <div className="form-group col-md-6">
                <label>Solicitação</label>
                <select id="inputState" className="form-control">
                  <option selected>Escolha...</option>
                  <option>Devolução</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label>N° Pedido:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mt-1">
              <div className="form-group mt-1">
                <label>CPF:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>

              <div className="form-group mt-1">
                <label>Nome Completo:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>

              <div className="form-group mt-1">
                <label>E-mail:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>
              <div className="form-group">
              <label>Motivo:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-2 mx-3 mt-4">
              <div className="col ">
                <Link to="/">
                  <button type="submit" className="buttom text-center ">
                    Voltar
                  </button>
                </Link>
              </div>
              <div className="col ">
                <button type="submit" className="buttom text-center">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default ServiceClient;
