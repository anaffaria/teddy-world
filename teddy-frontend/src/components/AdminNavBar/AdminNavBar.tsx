import AdminLogo from "../../assets/logoAdmin.svg";
import "./AdminNavBar.css";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiUserHeartLine } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiBearSmileLine } from "react-icons/ri";
import "../../assets/Global.css";

function AdminNavBar() {
  function handleLogoff() {
    console.log('olaaa')
    sessionStorage.clear();
  }

  const links = [
    {
      icon: <GoGraph className="navbar-icon"></GoGraph>,
      text: "Dashboard",
      link: "/admin",
    },
    {
      icon: <RiBearSmileLine className="navbar-icon"></RiBearSmileLine>,
      text: "Pelúcias",
      link: "/admin/pelucias",
    },
    {
      icon: <FiShoppingBag className="navbar-icon"></FiShoppingBag>,
      text: "Pedidos",
      link: "/admin/pedidos",
    },
    {
      icon: <CgArrowsExchangeAlt className="navbar-icon"></CgArrowsExchangeAlt>,
      text: "Devoluções",
      link: "/admin/devolucoes",
    },
    {
      icon: <RiUserHeartLine className="navbar-icon"></RiUserHeartLine>,
      text: "Clientes",
      link: "/admin/clientes",
    },
    {
      icon: <IoPricetagsOutline className="navbar-icon"></IoPricetagsOutline>,
      text: "Cupons",
      link: "/admin/cupons",
    },
  ];

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
              <Link
                to={{ pathname: element.link }}
                key={index}
                className="admin-link"
              >
                <div className="navbar-content mb-4">
                  <div className="navbar-content-icon">{element.icon}</div>
                  <div className="navbar-content-text">
                    <span>{element.text}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="navbar-footer">
          <div className="navbar-footer-icon">
            <IoExitOutline fontSize={24}></IoExitOutline>
          </div>
          <div className="navbar-footer-text">
            <button onClick={handleLogoff}>Sair</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
