import { Link } from "react-router-dom";
import './ServiceClient.css'

function ServiceClient() {
  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <form className="layout-box layout-box-service__client">
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

            <div className="row ">
              <div className="form-group col-md-12 ">
                <label>CPF:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-12 ">
                <label>Nome Completo:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-12 ">
                <label>E-mail:</label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-12">
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
                  <button type="submit" className="layout-buttom ">
                    Voltar
                  </button>
                </Link>
              </div>
              <div className="col ">
                <button type="submit" className="layout-buttom ">
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
