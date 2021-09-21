import logoImg from "../../assets/logo.svg";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import "./Header.css";

// Import
import { Link } from "react-router-dom";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";

export interface HeaderProps {
  children?: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;

  return (
    <>
      <div className="header-line" />
      <div className="header-container mt-1">
        <Link to="/">
          <div className="header-logo">
            <img src={logoImg} alt="logo" />
          </div>
        </Link>

        <div className="hearder-search d-flex">
          <div className="header-search-bar input-group">
            <input type="search" placeholder="Pesquisar"></input>
          </div>

          <div className="header-search-icon input-group">
            <HiOutlineSearch fontSize={37} />
          </div>
        </div>

        <div className="header-user d-flex  align-items-center">{children}</div>

        <div className="hearder-shopping-bag d-flex align-items-center">
          <div>
            <FiShoppingBag fontSize={37}></FiShoppingBag>
          </div>
          <div className="hearder-shopping-circle">
            <span className="shopping-bag-count">{customer?.cart?.itemDTOS.length}</span>
            <GiPlainCircle fontSize={22}></GiPlainCircle>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
