import logoImg from "../../assets/logo.svg";
import { FiShoppingBag } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./Header.css";

// Import
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-line" />
      <div className="header-container">
        <div className="header-logo">
          <img src={logoImg} alt="logo" />
        </div>

        <div className="hearder-search d-flex">
          <div className="header-search-bar input-group">
            <input type="search" placeholder="Pesquisar"></input>
          </div>

          <div className="header-search-icon input-group">
            <HiOutlineSearch fontSize={37} />
          </div>
        </div>

        <div className="header-user d-flex  align-items-center">
          <div className="header-user-icon">
            <BiUserCircle fontSize={37} />
          </div>

          <div className="d-flex flex-column header-user-info">
            <Link to="/atendimento">
              <span>Atendimento</span>
            </Link>
            <div>
              <Link to="/login">
                <span>Entre</span>
              </Link>
                {" "}ou 
              <Link to="/cadastro">
              <span>Cadastre-se</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hearder-shopping-bag d-flex align-items-center">
          <div>
            <FiShoppingBag fontSize={37}></FiShoppingBag>
          </div>
          <div className="hearder-shopping-circle">
            <span className="shopping-bag-count">0</span>
            <GiPlainCircle fontSize={22}></GiPlainCircle>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
