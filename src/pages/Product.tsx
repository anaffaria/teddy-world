import ProductPage from "../components/Product/Product";
import Footer from "../components/Footer/Footer";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import UserOff from "../components/UserOff/UserOff";

function Product() {
  return (
    <>
      <UserOff/>
      <QuickLinks/>
      <ProductPage/>
      <Footer />
    </>
  );
}

export default Product;
