import { MdPayment } from "react-icons/md";
import Img1 from "../../components/Product/img/img1.jpg";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import "./Product.css";

function Product() {
  return (
    <>
      <main>
        <div className="container ">
          <div className="row mt-5">
            <div className="col-sm-2 col-lg-1 ">
              <div className="card">
                <img className="card-img-top" src={Img1} alt="Card image cap" />
              </div>
            </div>

            <div className="col-sm">
              <div className="card border-0">
                <img className="card-img-top" src={Img1} alt="Card image cap" />
              </div>
            </div>

            <div className="col-sm ">
              <div className="card border-0">
                <div className="card-body p-0 mx-5">
                  <h5 className="card-title-product p-0">Leão de Pelúcia</h5>
                  <div className="card-text-product">
                    <div className="card-text-info">
                      de <s>R$ 72,92</s>
                      <br />
                      <MdPayment size={30} className="icons" />
                      <p className="product-value"> R$ 69.90</p>
                    </div>
                  </div>

                  <div className="card-text">
                    <p className="">
                      Garantia: <label> de 1 mês</label>
                    </p>

                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="20"
                    />

                    <div className="col ">
                      <Link to="#">
                        <button
                          type="submit"
                          className="product-buttom text-center "
                        >
                          Comprar
                        </button>
                      </Link>
                    </div>

                    <Accordion className='mt-5'>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          Descrição do produto
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Para cada ocasião diferente, existe uma pelúcia que
                            encanta. Seja para presentear um amor, um amigo,
                            seja para ver o sorriso lindo estampado no rosto de
                            uma criança ou até mesmo para se tornar um
                            companheiro inseparável de alguém!
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          Material
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>This is second tab body</Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                          Cuidado
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                          <Card.Body>This is first tab body</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
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

export default Product;
