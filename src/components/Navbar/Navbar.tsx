import { AiFillHeart } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <ul className="nav justify-content-between navbar-light bg-light navbar-expand-lg">
        <li className="nav-item">
          <a className="nav-link link-dark" href="#" color="black">
            <AiFillHeart className="icon-heart me-1" />
            Todas as pelúcias
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Elefante de pelúcia
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Urso de pelúcia
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Unicórnio de pelúcia
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Unicórnio de pelúcia
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Pelúcia Gigante
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Promoção
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
