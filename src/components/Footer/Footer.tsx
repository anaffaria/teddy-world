import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start footer-container mt-4">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Onde nos encontrar nas redes sociais:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <AiFillFacebook fontSize={20} />
            </a>
            <a href="" className="me-4 text-reset">
              <AiFillTwitterCircle fontSize={20} />
            </a>
            <a href="" className="me-4 text-reset">
              <AiFillInstagram fontSize={20} />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Teddy World
                </h6>
                <p>
                  Teddy World tem a missão social de levar suporte para crianças.
                  Todas as vendas de pelúcias da nossa loja é revertida para orfanatos.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              
              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-6"></i>
                  E-mail: teddyworld@google.com.br
                </p>
                <p>
                  <i className="fas fa-phone me-6"></i> Telefone: (11) 47531541
                </p>
                <p>
                  <i className="fas fa-print me-6"></i> Celular: (11) 987563478
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright
        </div>
      </footer>
    </>
  );
}

export default Footer;
