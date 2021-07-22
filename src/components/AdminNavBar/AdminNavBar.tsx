import AdminLogo from "../../assets/logoAdmin.svg";
import "./AdminNavBar.css";
import { IoExitOutline } from "react-icons/io5";

interface AdminNavBarProps {
  links?: Array<{
    icon: JSX.Element;
    text: string;
  }>;
}

function AdminNavBar({ links }: AdminNavBarProps) {
  return (
    <nav className="navbar-container">
      <div className="navbar-admin">
        <div className="navbar-header">
          <figure className="logo-wrapper">
            <img src={AdminLogo} alt="logo" className="admin-logo" />
          </figure>
        </div>

        <hr className="divider" />

        <div className="navbar-contents-wrapper">
          {links?.map((element, index) => {
            return (
              <div className="navbar-content mb-4" key={index}>
                <div className="navbar-content-icon">{element.icon}</div>
                <div className="navbar-content-text">
                  <span>{element.text}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="navbar-footer">
          <div className="navbar-footer-icon">
            <IoExitOutline fontSize={24}></IoExitOutline>
          </div>
          <div className="navbar-footer-text">
            <span>Sair</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
