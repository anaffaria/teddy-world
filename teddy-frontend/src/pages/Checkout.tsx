import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import { ToggleUser } from "../components/ToggleUser/ToggleUser";

function CheckoutPage() {
  return (
    <>
      <ToggleUser />

      <Checkout />

      <Footer />
    </>
  );
}

export default CheckoutPage;
