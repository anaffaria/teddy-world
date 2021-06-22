import Img1 from "../../components/Top3products/img/img1.jpg";
import Img2 from "../../components/Top3products/img/img2.jpg";
import Img3 from "../../components/Top3products/img/img3.jpg";
import Img4 from "../../components/Top3products/img/img4.jpg";

import "./top3products.css";

function Top3products() {
  return (
    <>
    <div className="row mt-1 px-4">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="card text-center ">
          <div className="card-body">
            <h5 className="card-title mt-0">Pelúcias mais vendidos</h5>
          </div>
        </div>
      </div>
    </div>
      

      <div className="row mt-2 px-4">
        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={Img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Leão de Pelúcia</h5>
              <p className="card-text">
                Com suporte a texto embaixo, que funciona como uma introdução a
                um conteúdo adicional.
              </p>
              <a href="#" className="buttom">
                Visitar
              </a>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={Img2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Elefante de Pelúcia</h5>
              <p className="card-text">
                Com suporte a texto embaixo, que funciona como uma introdução a
                um conteúdo adicional.
              </p>
              <a href="#" className="buttom">
                Visitar
              </a>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={Img3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Girafa de Pelúcia </h5>
              <p className="card-text">
                Com suporte a texto embaixo, que funciona como uma introdução a
                um conteúdo adicional.
              </p>
              <a href="#" className="buttom">
                Visitar
              </a>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <div className="card">
            <img className="card-img-top" src={Img4} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Onça de Pelúcia</h5>
              <p className="card-text">
                Com suporte a texto embaixo, que funciona como uma introdução a
                um conteúdo adicional.
              </p>
              <a href="#" className="buttom">
                Visitar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Top3products;
