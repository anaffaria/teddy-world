import "./TopProducts.css";

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
        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" key={index}>
          <div className="card">
            <img className="card-img-top" src={el.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <p className="card-text">{el.subtitle}</p>
              <a href={el.productUrl} className="buttom d-flex">
                <p className="m-auto text-center">Visitar</p>
              </a>
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
              <h5 className="card-title mt-0">Pelúcias mais vendidos</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-auto mt-2 w-100">{renderProducts()}</div>
    </>
  );
}
export default TopProducts;
