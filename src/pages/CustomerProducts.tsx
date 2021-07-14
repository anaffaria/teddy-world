import Footer from "../components/Footer/Footer";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import CustomerProductPage from "../components/CustomerProducts/CustomerProducts";
import UserOn from "../components/UserOn/UserOn";

function CustomerProducts() {
  return (
    <>
      <UserOn/>
      <QuickLinks/>
      <CustomerProductPage />
      <Footer />
    </>
  )
}

export default CustomerProducts;