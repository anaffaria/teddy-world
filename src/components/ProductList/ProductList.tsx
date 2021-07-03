import { Link } from "react-router-dom";
import Img1 from "../../components/ProductList/img/img1.jpg";
import Img2 from "../../components/ProductList/img/img2.jpg";
import Img3 from "../../components/ProductList/img/img3.jpg";

function ProductList() {
  return (
    <>
      <main>
        <div className="container mt-2">
          <h6>Pesquisa</h6>
          <p>Busque por preços</p>
          <div className="row">
            <div className="col-2 col-md-3">
              <div className="card d-flex">
                <br />
                <input
                  type="range"
                  className="custom-range"
                  min="0"
                  max="5"
                  step="0.5"
                  id="customRange3"
                />
                <h6>Cor</h6>
              </div>
            </div>

            <div className="col-2 col-md-3">
              <div className="card">
                <img className="card-img-top" src={Img1} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2 col-md-3">
              <div className="card">
                <img className="card-img-top" src={Img2} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2 col-md-3">
              <div className="card">
                <img className="card-img-top" src={Img3} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductList;
