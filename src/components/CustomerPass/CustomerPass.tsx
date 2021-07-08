import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { Link } from "react-router-dom";
import "./CustomerPass.css";
function CustomerPass() {
  return (
    <>
      <CustomerAccount>
        <div className="row">
          <form className="form-row d-flex col-sm-12 ">
            <div className="col-12 col-sm-4">
              <label>Digite sua senha atual</label>
              <input
                type="text"
                className="form-control"
                placeholder="senha atual"
              />
            </div>

            <div className="col-6 col-sm-4">
              <label>Digite uma nova senha</label>
              <input
                type="text"
                className="form-control"
                placeholder="nova senha"
              />
            </div>

            <div className="col-6 col-sm-4">
              <label>Repita sua nova senha</label>
              <input
                type="text"
                className="form-control"
                placeholder="repita a nova senha"
              />
            </div>

            <div className="col-12 d-flex justify-content-end mt-5 mb-5 mx-auto">
              <Link to="/cliente">
                <button type="submit" className="custumer_pass-buttom">
                  Salvar Alterações
                </button>
              </Link>
            </div>
          </form>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerPass;
