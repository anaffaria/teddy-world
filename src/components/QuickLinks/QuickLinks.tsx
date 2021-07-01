import "./QuickLinks.css";

function QuickLinks() {
  return (
    <>
      <ul className="nav justify-content-between navbar-light bg-light navbar-expand-lg ">
        <li className="nav-item mt-1">
          <a className="nav-link link-dark font-weight-bold" href="#" color="black">
            Todas as pelúcias
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            Elefante de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            Urso de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            Panda de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            Unicórnio de pelúcia
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#">
            Pelúcia Gigante
          </a>
        </li>
        <li className="nav-item mt-1">
          <a className="nav-link link-dark" href="#" >
            Promoção
          </a>
        </li>
      </ul>
    </>
  );
}

export default QuickLinks;
