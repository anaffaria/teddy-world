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

function AdminNavBar() {
  const links = [
    {
      icon: <GoGraph fontSize={24}></GoGraph>,
      text: "Dashboard",
      link: "/admin",
    },
    {
      icon: <RiBearSmileLine fontSize={24}></RiBearSmileLine>,
      text: "Pelúcias",
      link: "/admin/pelucias",
    },
    {
      icon: <FiShoppingBag fontSize={24}></FiShoppingBag>,
      text: "Pedidos",
      link: "/admin/pedidos",
    },
    {
      icon: <CgArrowsExchangeAlt fontSize={24}></CgArrowsExchangeAlt>,
      text: "Devoluções",
      link: "/admin/devolucoes",
    },
    {
      icon: <RiUserHeartLine fontSize={24}></RiUserHeartLine>,
      text: "Clientes",
      link: "/admin/clientes",
    },
    {
      icon: <IoPricetagsOutline fontSize={24}></IoPricetagsOutline>,
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
            <span>Sair</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
