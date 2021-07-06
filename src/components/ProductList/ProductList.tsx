import { useState } from "react";
import { MdAssignmentReturned } from "react-icons/md";
import "./ProductList.css";

interface ListProductsProps {
  listproducts: Array<{
    image: string;
    title?: string;
    subtitle: string;
    productUrl: string;
    price: number;
  }>;

  listfilter: {
    categories: string[];
    colors: string[];
    sizes: string[];
  };
}

function ProductList({ listproducts, listfilter }: ListProductsProps) {
  const [valRange, setValRange] = useState<number>(0);
  function renderProductsList() {
    return listproducts.map((el, index) => {
      return (
        <>
          <div
            className="col-xs-12 mt-1 col-sm-3 col-md-3 col-lg-3"
            key={index}
          >
            <div className="card border-0">
              <img
                className="card-img-top"
                src={el.image}
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">{el.subtitle}</p>
                <p className="card-text">R$: {el.price}</p>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  function renderFilterList() {
    return (
      <>
      
        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          className="scrollspy-example"
        >
          <h6 className="w-100 mt-2">Categoria</h6>
          <ul className="list-group">
            <li className="list-group-item border-0">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Urso
            </li>
          </ul>
        </div>

        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          className="scrollspy-example"
        >
          <h6 className="w-100 mt-2">Cor</h6>
          <ul className="list-group">
            <li className="list-group-item border-0">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
            </li>
          </ul>
        </div>

        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          className="scrollspy-example"
        >
          <h6 className="w-100 mt-2">Tamanho</h6>
          <ul className="list-group ">
            <li className="list-group-item border-0 mt-0">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
            </li>
          </ul>
        </div>
      
      </>
    );
  }

  return (
    <>
      <main>
        <div className="container mt-2">
          <h6>Pesquisa</h6>
          <div className="colum d-flex justify-content-between ">
            <p>Busque por preços</p>
            <p>produtos encontrados para essa busca</p>
            <div className="form-group col-md-2">
              <select id="inputState" className="form-control">
                <option selected>Selecione</option>
                <option>Maior preço</option>
                <option>Menor preço.</option>
                <option>A a Z</option>
                <option>Z a A</option>
              </select>
            </div>
          </div>

          <div className="row flex-wrap">
            <div className="col-12 col-md-3 mt-2">
              <div className="mb-2">
                <label>R$: {valRange}</label>
                <input
                  type="range"
                  className="custom-range col-12"
                  min="0"
                  max="500"
                  step="0.5"
                  id="customRange3"
                  onChange={(val) => {
                    setValRange(Number(val.target.value));
                  }}
                />
              </div>
              {renderFilterList()}
            </div>
            <div className="col-md-9 d-flex flex-wrap border-0">
              {renderProductsList()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default ProductList;
