import "./TopProducts.css";
import { Link } from "react-router-dom";

interface TopProductsProps {
  products: Array<{
    image: string;
    title?: string;
    subtitle: string;
    productUrl: string;
    price: number;
  }>;
}

function TopProducts({ products }: TopProductsProps) {
  function renderProducts() {
    return products.map((el, index) => {
      return (
        <div className="col-xs-12 mt-2 col-sm-3 col-md-3 col-lg-3" key={index}>
          <div className="card">
            <img className="card-img-top" src={el.image} alt="Card-cap" />
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <p className="card-text">{el.subtitle}</p>
              <p className="card-text">R$: {el.price}</p>
              <Link
                className="link layout-buttom d-flex"
                to={`/produto?id=${el.productUrl}`}
              >
                <p className="m-auto text-center">Visitar</p>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="row m-auto mt-1 w-100">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="card text-center ">
            <div className="card-body">
              <h5>Pelúcias mais vendidos</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-auto mt-2 w-100 flex-wrap">{renderProducts()}</div>
    </>
  );
}
export default TopProducts;
