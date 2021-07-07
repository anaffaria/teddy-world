import "./CustomerAccount.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface CustomerAccountProps {
  children?: React.ReactNode
}

function CustomerAccount({ children }: CustomerAccountProps) {
  return (
    <>
      <main>
        <div className="container ">
          <div className="row p-1 mt-2 ">
            <div className="col-lg-3 col-sm-3">
              <FaUserCircle size={25} />
              <label className="font-weight-normal ml-2">Olá, Name!</label>
            </div>
            <div className="col-lg-9">
              <label className="font-weight-normal ml-2">
                Nome do link selecionado
              </label>
            </div>
          </div>
          <div className="row ">
            <div className="col-3 col-sm-3 border">
              <div className="list-group p-2 ">
                <h6>Seu Cadastro</h6>
                <div>
                  <Link
                    to="/cliente/alterar_dados"
                    className="list-group-item costumer_account_link border-0"
                  >
                    Alterar dados cadastrais
                  </Link>
                  <a href="#" className="list-group-item costumer_account_link border-0">
                    Alterar senha
                  </a>
                  <a href="#" className="list-group-item costumer_account_link border-0">
                    Cartões
                  </a>
                  <a href="#" className="list-group-item costumer_account_link border-0">
                    Sair
                  </a>
                </div>

                <div className="list-group ">
                  <h6>Seus Pedidos</h6>
                  <div>
                    <a href="#" className="list-group-item costumer_account_link border-0">
                      Acompanhar pedidos
                    </a>
                    <a href="#" className="list-group-item costumer_account_link border-0">
                      Compras
                    </a>
                  </div>
                </div>

                <div className="list-group ">
                  <h6>Serviços</h6>
                  <div>
                    <a href="#" className="list-group-item costumer_account_link border-0">
                      Central de Atendimento
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9 col-sm-9">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CustomerAccount;
