import logoImg from "../../assets/logo.svg";
import "./Register.css";

function Register() {
  return (
    <>
      <div className="body">
        <div className="container mt-0">
          <div className="box">
            <form>
              <div className="d-flex justify-content-center mb-4">
                <h4>Cadastre-se</h4>
              </div>
              <div className="row mb-2 mt-2">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label">Primeiro nome:</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label">Ultimo nome:</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-2">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                />
                <label className="form-label">E-mail</label>
              </div>

              <div className="row mb-2 mt-2">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label">CPF:</label>
                  </div>
                </div>
                <div className="col">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Selecione</option>
                    <option value="1">Feminino</option>
                    <option value="2">Masculino</option>
                    <option value="3">Indefinido</option>
                  </select>
                  <label className="form-label">Sexo:</label>
                </div>
              </div>

              <div className="row mb-2 mt-2">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label">Senha:</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label">Confirmar senha:</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-2">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                />
                <label className="form-label">E-mail</label>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
