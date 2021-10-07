import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import { ToggleUser } from "../components/ToggleUser/ToggleUser";

function CheckoutPage() {
  return (
    <>
      <ToggleUser />

      {/* {customer.cartDTO.length > 0 ? <Checkout /> : "Criar novo componente para carrinho vazio"} */}
      <Checkout />

      <Footer />
    </>
  );
}

export default CheckoutPage;
