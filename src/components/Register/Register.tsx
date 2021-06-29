import logoImg from "../../assets/logo.svg";
import "./Register.css";

function Register() {
  return (
    <>
      <main className='register-bg'>
        <section className="container login-form m-auto h-100">
          <form className="box">
            <div className="row mb-2">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label">Primeiro nome:</label>
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-outline">
                  <label className="form-label">Ultimo nome:</label>
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                  />
                </div>
              </div>
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

            <div className="row justify-content-center">
              <button type="submit" className="buttom text-center">
                Entrar
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );

  <div className="form-outline mb-2">
    <label className="form-label">E-mail</label>
    <input type="email" id="form3Example3" className="form-control" />
  </div>;
}

export default Register;
