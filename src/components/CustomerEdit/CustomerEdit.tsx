import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import "./CustomerEdit.css";

function CustomerEdit() {
  function handleClickAdd() {
    console.info("oieie");
  }

  return (
    <>
      <CustomerAccount>
        <div className="row">
          <div className="col-sm-8 ">
            <form>
              <div className="form-row ">
                <div className="col-12 col-sm-12 mt-2">
                  <label>E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="col-12 col-sm-12  mt-2">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                  />
                </div>

                <div className="col-6 col-sm-6  mt-2">
                  <label>CPF</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CPF"
                  />
                </div>

                <div className="col-2 col-sm-2  mt-2">
                  <label>Dia</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dia"
                  />
                </div>
                <div className="col-2 col-sm-2  mt-2">
                  <label>Mês</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mês"
                  />
                </div>
                <div className="col-2 col-sm-2  mt-2">
                  <label>Ano</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ano"
                  />
                </div>
                <div className="col-12 col-sm-12  mt-2">
                  <label>RG</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="RG"
                  />
                </div>

                <div className="col-6 col-sm-6  mt-2">
                  <label>Telefone principal</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telefone primario"
                  />
                </div>

                <div className="col-6 col-sm-6  mt-2">
                  <label>Telefone secundário</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telefone secundário"
                  />
                </div>

                <div className="col mt-5 mb-5 d-flex justify-content-end">
                  <Link to="/cliente">
                    <button type="submit" className="custumer_edit-buttom">
                      Alterar cadastro
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>

          <div className="col-4 col-sm-4 mt-4">
            <section>
              <form>
                <div className="form-group">
                  <label htmlFor=""></label>
                </div>
              </form>
            </section>
            <div className="col-12 col-sm-12  mt-3 align-items-center border">
              <IoMdAddCircle
                type="button"
                className="col-12 align-items-center"
                size={40}
                color={"#FA98AF"}
                onClick={handleClickAdd}
              />
              <label className=" col-12 font-weight-bold text-center">
                Adicionar novo endereço
              </label>
            </div>
          </div>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerEdit;
