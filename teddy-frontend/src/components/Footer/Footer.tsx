import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

import "./Footer.css";
export interface FooterProps {
  children?: React.ReactNode;
}

function Footer({ children }: FooterProps) {
  return (
    <>
      <footer className="text-center text-lg-start footer-container mt-4">
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Onde nos encontrar nas redes sociais:</span>
          </div>

          <div className="w-70">
            <a href="#123" className="me-4 text-reset">
              <AiFillFacebook fontSize={25} />
            </a>
            <a href="#123" className="me-4 text-reset">
              <AiFillTwitterCircle fontSize={25} />
            </a>
            <a href="#123" className="me-4 text-reset">
              <AiFillInstagram fontSize={25} />
            </a>
            <a href="#123" className="me-4 text-reset">
              <MdEmail fontSize={25} />
            </a>
          </div>
        </section>

        <section>
          <div className="text-center text-md-start mt-5">
            <div className="row mt-3 w-100">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Teddy World
                </h6>
                <p>
                  Teddy World tem a missão social de levar suporte para
                  crianças. Todas as vendas de pelúcias são revertida para
                  orfanatos.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Selos</h6>
                <div>
                  <i className="me-4 text-reset ">
                    <FcApproval fontSize={30} />
                  </i>
                  <i className="me-4 text-reset">
                    <FcLock fontSize={30} />
                  </i>
                  <i className="me-4 text-reset">
                    <FcShipped fontSize={30} />
                  </i>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
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

        <div className="text-center p-4">© 2021 Copyright</div>
      </footer>
    </>
  );
}

export default Footer;
