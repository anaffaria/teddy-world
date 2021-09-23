import QuickLinks from "../QuickLinks/QuickLinks";
import Footer from "../Footer/Footer";
import { MdPayment } from "react-icons/md";
import { Accordion, Card } from "react-bootstrap";
import { useState } from "react";
import { HiShieldCheck } from "react-icons/hi";
import { RiBearSmileFill } from "react-icons/ri";
import { Teddy } from "../../Types/Teddy";
import { AddCartItem } from "../../service/cartService";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";
import { ToggleUser } from "../ToggleUser/ToggleUser";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Product.css";

interface ProductListProps {
  teddy?: Teddy;
}

function Product({ teddy }: ProductListProps) {
  const [amount, setAmount] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;
  const history = useHistory();
  const token = sessionStorage.getItem("token");

  function addProductChart() {
    if (customer === undefined) {
      history.push("/login");
      Swal.fire({
        icon: "warning",
        title: "Você precisa estar logado para efetuar essa operação",
      });
      return;
    }

    if (amount <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Quantidade não pode ser 0",
      });
      return;
    }

    const data = {
      teddy: {
        id: id,
      },
      amount: amount,
    };

    function onSuccess() {
      Swal.fire({
        icon: "success",
        title: "Dados Atualizados!",
      });

      setCustomer((prev) => {
        console.log(prev);
        let customer = Object.assign({}, prev);
        customer?.cart?.itemDTOS.push({
          teddyItemDTO: {
            id,
          },
          amount,
        });
        return customer;
      });
    }

    function onError(message: string) {
      Swal.fire({
        icon: "error",
        title: `${message}`,
      });
    }

    AddCartItem({
      data,
      onSuccess,
      onError,
      id: `${customer?.id}`,
      token: token ? token : "",
    });
  }

  return (
    <>
      <ToggleUser />
      <QuickLinks />

      <main>
        <div className="container ">
          <div className="row mt-5">
            <Link to="/produtos">
              <div className="goBack ">
                <IoIosArrowBack size={35} />
              </div>
            </Link>
            <div className="col-sm-2 col-lg-1 ">
              <div className="card">
                <img
                  className="card-img-top "
                  src={teddy?.image}
                  alt="Card cap"
                />
              </div>
            </div>

            <div className="col-sm">
              <div className="card border-0">
                <img
                  className="card-img-top rounded"
                  src={teddy?.image}
                  alt="Card cap"
                />
              </div>
            </div>

            <div className="col-sm ">
              <div className="card border-0">
                <div className="card-body p-0 mx-5">
                  <h5 className="card-title-product p-0">{}</h5>
                  <div className="card-text-product">
                    <div className="card-text-info">
                      de <s>R$ {teddy?.priceReal}</s>
                      <br />
                      <MdPayment size={30} className="icons" />
                      <p className="product-value"> R$ {teddy?.priceFactory}</p>
                    </div>
                  </div>

                  <div className="card-text">
                    <p>
                      Garantia: <label> de 1 mês</label>
                    </p>

                    <p>
                      Quantidade Disponível:{" "}
                      <label>{teddy?.amountAvailable}</label>
                    </p>

                    <div className="d-flex justify-content-between">
                      <div className="quantity d-flex align-items-center">
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max={teddy?.amountAvailable}
                          step="1"
                          onChange={(event) => {
                            try {
                              const userAmount = Number(event.target.value);
                              if (userAmount > teddy!.amountAvailable) return;
                              setAmount(userAmount);
                            } catch (error) {
                              console.log(error);
                            }
                          }}
                          value={amount}
                          className="product-amount"
                        />
                        <div className="plus_minus__buttons d-flex flex-column">
                          <div
                            className="w-100 h-100 m-auto d-flex plus-border-button"
                            onClick={() => {
                              setAmount((prev: number) => {
                                if (prev >= teddy!.amountAvailable) return prev;
                                return prev + 1;
                              });
                            }}
                          >
                            <span>+</span>
                          </div>

                          <div
                            className="w-100 h-100 m-auto d-flex minus-border-button"
                            onClick={() => {
                              setAmount((prev: number) => {
                                if (prev <= 0) return 0;
                                return prev - 1;
                              });
                            }}
                          >
                            <span>-</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-100 ml-3">
                        <button
                          type="submit"
                          className="product-buttom text-center w-100"
                          onClick={addProductChart}
                        >
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>

                    <Accordion className="mt-5" defaultActiveKey="0">
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          active=""
                        >
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
                          <Card.Body>
                            <ul className="list-group d-flex border-none">
                              <li className="list-group-item">
                                <HiShieldCheck size={20} color={"#fa98af"} />{" "}
                                Pelúcia 100% Poliéster
                              </li>
                              <li className="list-group-item">
                                <HiShieldCheck size={20} color={"#fa98af"} />{" "}
                                Pelúcia Hipoalergênica
                              </li>
                              <li className="list-group-item">
                                <HiShieldCheck size={20} color={"#fa98af"} />{" "}
                                Pelúcia Atóxica
                              </li>
                              <li className="list-group-item">
                                <HiShieldCheck size={20} color={"#fa98af"} />{" "}
                                Lavável
                              </li>
                              <li className="list-group-item">
                                <HiShieldCheck size={20} color={"#fa98af"} />{" "}
                                Enchimento em fibra sintética de silicone.
                              </li>
                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                          Cuidado
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <ul className="list-group d-flex border-none">
                              <li className="list-group-item">
                                <RiBearSmileFill size={20} color={"#fa98af"} />{" "}
                                Lavar a mão
                              </li>
                              <li className="list-group-item">
                                <RiBearSmileFill size={20} color={"#fa98af"} />{" "}
                                Não alvejar
                              </li>
                              <li className="list-group-item">
                                <RiBearSmileFill size={20} color={"#fa98af"} />{" "}
                                Não usar secadora
                              </li>
                            </ul>
                          </Card.Body>
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
      <Footer />
    </>
  );
}

export default Product;
