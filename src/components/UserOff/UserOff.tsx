import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import Header from "../Header/Header";

export interface UserOffProps {
  children?: React.ReactNode;
}

function UserOff({ children }: UserOffProps) {
  return (
    <>
      <Header>
        <div className="header-user d-flex  align-items-center">
          <div className="header-user-icon">
            <BiUserCircle fontSize={37} />
          </div>

          <div className="d-flex flex-column header-user-info">
            <div>
              <Link to="/login" className="nav-link-header">
                <span>Entre</span>
              </Link>{" "}
              ou
              <Link to="/cadastro" className="nav-link-header">
                <span>Cadastre-se</span>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}

export default UserOff;
