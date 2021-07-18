import { FormEvent } from "react";
import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import UserOn from "../components/UserOn/UserOn";

function CheckoutPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.info(
      "%c evento de handlesubmit",
      "color: #123456; background: #f7f7"
    );
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
