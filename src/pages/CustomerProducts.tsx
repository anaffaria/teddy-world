import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import CustomerProductPage from "../components/CustomerProducts/CustomerProducts";

function CustomerProducts() {
  return (
    <>
      <Header />
      <QuickLinks/>
      <CustomerProductPage />
      <Footer />
    </>
  )
}

export default CustomerProducts;