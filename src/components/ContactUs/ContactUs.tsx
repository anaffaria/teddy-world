import CustomerContactUs from "../../pages/CustomerContactUs";
import { Link } from "react-router-dom";
import CustomerAccount from "../CustomerAccount/CustomerAccount";

function ContactUs() {
  return (
    <>
      <CustomerAccount>
        <div className="row">
          <div className="col-sm-8 ">
            <form>
              <div className="form-row ">
                <div className="form-group  col-md-4 col-sm-4 mt-2">
                  <label>Departamento</label>
                  <select
                    id="inputState"
                    className="form-control select_product"
                  >
                    <option selected>Selecione</option>
                    <option>Devolução</option>
                  </select>
                </div>

                <div className="col-8 col-sm-8 mt-2">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                  />
                </div>

                <div className="col-4 col-sm-4 mt-2">
                  <label>Número do pedido</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número do pedido"
                  />
                </div>
                <div className="col-8 col-sm-8 mt-2">
                  <label>E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>

                <div className="col-12 col-sm-12  mt-2">
                  <label>Assunto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex: devolução do produto"
                  />
                </div>
                <div className="col-12 col-sm-12  mt-2">
                  <label>Mensagem</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></textarea>
                </div>

                <div className="col-12 col-sm-12  mt-2">
                  <label>Anexos</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>

                <div className="col mt-5 mb-5 d-flex justify-content-end">
                  <Link to="/cliente/pedidos">
                    <button type="submit" className="buttom btn-block custumer_edit-buttom">
                      Enviar Mensagem
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CustomerAccount>
    </>
  );
}

export default ContactUs;
