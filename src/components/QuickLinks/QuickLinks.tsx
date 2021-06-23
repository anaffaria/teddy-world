import { AiFillHeart } from "react-icons/ai";
import "./QuickLinks.css";

function QuickLinks() {
  return (
    <>
      <ul className="nav justify-content-between navbar-light bg-light navbar-expand-lg ">
        <li className="nav-item mt-1">
          <a className="nav-link link-dark font-weight-bold" href="#" color="black">
            <AiFillHeart className="icon-heart me-1" />
            Todas as pelúcias
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Elefante de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Urso de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Panda de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Unicórnio de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            <AiFillHeart className="icon-heart me-1" />
            Pelúcia Gigante
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#" >
            <AiFillHeart className="icon-heart me-1" />
            Promoção
          </a>
        </li>
      </ul>
    </>
  );
}

export default QuickLinks;
