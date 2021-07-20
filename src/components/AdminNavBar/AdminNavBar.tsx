import AdminLogo from "../../assets/logoAdmin.svg";
import "./AdminNavBar.css";
import { GoGraph } from "react-icons/go";
import { GiExitDoor } from "react-icons/gi";
import { RiDoorOpenFill } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";

function AdminNavBar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-admin">
        <div className="navbar-header">
          <figure>
            <img src={AdminLogo} alt="logo" />
          </figure>
        </div>

        <hr className="divider" />

        <div className="navbar-contents-wrapper">
          <div className="navbar-content">
            <div className="navbar-content-icon">
              <GoGraph fontSize={24}></GoGraph>
            </div>
            <div className="navbar-content-text">
              <span>Dashboard</span>
            </div>
          </div>
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
