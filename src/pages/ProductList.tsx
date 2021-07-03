import Header from "../components/Header/Header";
import PageProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";
import QuickLinks from "../components/QuickLinks/QuickLinks";
function ProductList() {
  return (
    <>
      <Header />
      <QuickLinks/>
      <PageProductList/>
      <Footer />
    </>
  );
}

export default ProductList;