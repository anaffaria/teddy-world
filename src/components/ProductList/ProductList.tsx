import { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../components/ProductList/img/img1.jpg";
import Img2 from "../../components/ProductList/img/img2.jpg";
import Img3 from "../../components/ProductList/img/img3.jpg";

function ProductList() {
  const [valRange, setValRange] = useState<number>(0)

  return (
    <>
      <main>
        <div className="container mt-2">
          <h6>Pesquisa</h6>
          <p>Busque por preços</p>
          <div className="row flex-wrap">
            <div className="col-12 col-md-3 mt-2">
              <div className="mb-2">
                <label>R$: {valRange}</label>
                <input
                  type="range"
                  className="custom-range col-12"
                  min="0"
                  max="1100"
                  step="0.5"
                  id="customRange3"
                  onChange={(val) => {setValRange(Number(val.target.value))}}
                />
              </div>
              <div className="input-group mb-3">
                <h6 className="w-100">Cor</h6>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                </div>
                <label className="form-control">Filtro 1</label>
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="radio"
                      aria-label="Radio button for following text input"
                    />
                  </div>
                </div>
                <label className="form-control">Filtro 2</label>
              </div>
            </div>

            <div className="col-md-9 d-flex flex-wrap">
              <div className="col-12 col-sm-6 col-md-3 mt-2">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Img1}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mt-2">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Img2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mt-2">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Img3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mt-2">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Img3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mt-2">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Img3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
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
