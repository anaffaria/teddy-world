import "./QuickLinks.css";
import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <>
      <ul className="nav justify-content-between navbar-light bg-light navbar-expand-lg mt-1">
        <li className="nav-item mt-1">
          <Link to='/produtos' className="nav-link link-dark font-weight-bold"  color="black">
            Todas as pelúcias
          </Link>
        </li>
        <li className="nav-item mt-1">
          <Link to='/produtos' className="nav-link link-dark" href="#">
            Elefante de pelúcia
          </Link>
        </li>
        <li className="nav-item mt-1">
          <Link to='/produtos' className="nav-link link-dark" href="#">
            Urso de pelúcia
          </Link>
        </li>
        <li className="nav-item mt-1">
          <Link to='/produtos' className="nav-link link-dark" href="#">
            Panda de pelúcia
          </Link>
        </li>
        <li className="nav-item mt-1">
          <Link to='/produtos' className="nav-link link-dark" href="#">
            Unicórnio de pelúcia
          </Link>
        </li>
        <li className="nav-item mt-1">
          <Link to='/produtos' className="nav-link link-dark" href="#">
            Pelúcia Gigante
          </Link>
        </li>
        <li className="nav-item mt-1">
          <Link to='/produtos' className="nav-link link-dark" href="#" >
            Promoção
          </Link>
        </li>
      </ul>
    </>
  );
}

export default QuickLinks;
