import UserOff from "../UserOff/UserOff";
import QuickLinks from "../QuickLinks/QuickLinks";
import Footer from "../Footer/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { Category, Color, Size, Teddy } from "../../Types/Teddy";
import {FaRegMoneyBillAlt} from "react-icons/fa";

interface ProductListProps {
  teddys?: Array<Teddy>;
  filters: {
    categories?: Category[],
    colors?: Color[],
    sizes?: Size[]
  };
}

function ProductList({ filters, teddys }: ProductListProps) {
  const [valRange, setValRange] = useState<number>(0);

  function renderProductsList() {
    return teddys?.map((el, index) => {
      return (
        <div className="cards mt-2 col-sm-3 border-0 " key={index}>
            <Link to="/produto/:id" className="product_link">
              <img className="card-img-top rounded" src={el.image} alt="Card cap" />
              <div className="card-body p-1 mt-2">
                <h5 className="card-title card-title text-truncate" data-toggle="tooltip" title={el.title} >{el.title}</h5>
                 <h6 className="card-subtitle mb-2 text-muted text-truncate" data-toggle="tooltip" title={el.subtitle}>{el.subtitle}</h6>
                <label className="card-text font-weight-bold"><FaRegMoneyBillAlt size={22} className="mb-1 price"/> R$ {el.priceFactory}</label>
              </div>
            </Link>
        </div>
      );
    });
  }

  function renderCategories() {
    console.info(filters);
    return filters?.categories?.map((el, index) => {
      return (
        <li key={index}>
          <div className="form-check ">
            <input className="form-check-input" type="checkbox" value={el.id} />
            <label className="form-check-label">{el.name}</label>
          </div>
        </li>
      );
    });
  }

  function renderColors() {
    return filters?.colors?.map((el, index) => {
      return (
        <li key={index}>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={el.id} />
            <label className="form-check-label">{el.name}</label>
          </div>
        </li>
      );
    });
  }

  function renderSizes() {
    return filters?.sizes?.map((el, index) => {
      return (
        <li key={index}>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={Size[el]} />
            <label className="form-check-label">{el}</label>
          </div>
        </li>
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
          <ul className="list-group">{renderCategories()}</ul>
        </div>

        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          className="scrollspy-example"
        >
          <h6 className="w-100 mt-2">Cor</h6>
          <ul className="list-group">{renderColors()}</ul>
        </div>

        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          className="scrollspy-example"
        >
          <h6 className="w-100 mt-2">Tamanho</h6>
          <ul className="list-group ">{renderSizes()}</ul>
        </div>
      </>
    );
  }

  return (
    <>
      <UserOff />
      <QuickLinks />
      <main>
        <div className="container mt-2">
          <h6>Pesquisa</h6>
          <div className="colum d-flex justify-content-between ">
            <p>Busque por preços</p>
            <p>produtos encontrados para essa busca</p>
            <div className="form-group col-md-2">
              <select
                id="inputState"
                className="form-control select_product"
                defaultValue=""
              >
                <option value="">Selecione</option>
                <option value="2">Maior preço</option>
                <option value="3">Menor preço.</option>
                <option value="4">A a Z</option>
                <option value="5">Z a A</option>
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
      <Footer />
    </>
  );
}
export default ProductList;
