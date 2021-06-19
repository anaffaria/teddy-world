import logoImg from "../../assets/logo.svg";
import { FiShoppingBag } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./header.css";

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
            <a href="#">
              <span>Atendimento</span>
            </a>
            <a href="#">
              <span>Entre ou Cadastre-se</span>
            </a>
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
