import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Header from "../Header/Header";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";

export interface UserOnProps {
  children?: React.ReactNode;
}

function UserOn({ children }: UserOnProps) {
  const { setCustomer } = useCustomer() as CustomerContextTiping;

  function handleLogoff() {
    sessionStorage.clear();
    setCustomer(undefined);
  }

  return (
    <>
      <Header>
        <div className="header-user d-flex  align-items-center">
          <div className="header-user-icon">
            <FaUserCircle fontSize={30} />
          </div>

          <div className="d-flex flex-column header-user-info">
            <Link to="/atendimento/novo" className="nav-link-header">
              <span>Atendimento</span>
            </Link>
            <div>
              <Link to="/login" className="nav-link-header">
                <span>Minha Conta</span>
              </Link>{" "}
              /
              <Link to="/" className="nav-link-header">
                <span onClick={handleLogoff}>Sair</span>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

export default UserOn;
