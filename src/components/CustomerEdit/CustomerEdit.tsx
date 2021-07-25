import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import "./CustomerEdit.css";
import { useState } from "react";

function CustomerEdit() {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

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

          <div className="col-4 col-sm-4">
            {!isOpenForm && (
              <div className={`${isOpenForm ? "d-none" : ""} border p-2`}>
                <span>Endereços de Entrega:</span>

                <ul className="m-0 p-0 mt-3">
                  <li>
                    Rua Carlos Barattino, n. 908 - Vila Nova Mogilar, Mogi das
                    Cruzes-SP - CEP 08773-600
                  </li>
                </ul>

                <hr />
                <span>Endereços de Cobrança:</span>
                <ul className="m-0 p-0 mt-3">
                  <li>
                    Rua Carlos Barattino, n. 908 - Vila Nova Mogilar, Mogi das
                    Cruzes-SP - CEP 08773-600
                  </li>
                </ul>
              </div>
            )}
            {isOpenForm && (
              <aside>
                <form className="mt-2">
                  <div className="form-group">
                    <label htmlFor="cep">CEP</label>
                    <input name="cep" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="street">Logradouro</label>
                    <input name="street" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="number">Número</label>
                    <input name="street" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="complement">Complemento</label>
                    <input name="complement" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">Estado</label>
                    <input name="state" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">Cidade</label>
                    <input name="city" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="adressType">Tipo do Endereço</label>
                    <select
                      name="adressType"
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="">Selecione</option>
                      <option value="billing">Entrega</option>
                      <option value="delivery">Cobrança</option>
                    </select>
                  </div>

                  <button className="btn btn-primary btn-block">
                    Adicionar
                  </button>
                </form>
                <button
                  className="btn btn-secondary btn-block mt-4"
                  onClick={() => setIsOpenForm(false)}
                >
                  Cancelar
                </button>
              </aside>
            )}
            {!isOpenForm && (
              <div
                className="col-12 col-sm-12  mt-3 align-items-center mt-4 border"
                onClick={() => setIsOpenForm(true)}
              >
                <IoMdAddCircle
                  type="button"
                  className="col-12 align-items-center"
                  size={40}
                  color={"#FA98AF"}
                />
                <label className=" col-12 font-weight-bold text-center">
                  Adicionar novo endereço
                </label>
              </div>
            )}
          </div>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerEdit;
