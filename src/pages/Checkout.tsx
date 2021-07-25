import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import UserOn from "../components/UserOn/UserOn";

function CheckoutPage() {
  const history = useHistory();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.info(
      "%c evento de handlesubmit",
      "color: #123456; background: #f7f7"
    );

    history.push("/cliente/pedidos");
  }

  return (
    <>
      <UserOn />

      <Checkout handleSubmit={handleSubmit} />

      <Footer />
    </>
  );
}

export default CheckoutPage;
