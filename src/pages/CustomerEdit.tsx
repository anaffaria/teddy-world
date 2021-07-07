import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import CustomerEditPage from "../components/CustomerEdit/CustomerEdit";

function CustomerEdit() {
  return (
    <>
      <Header />
      <QuickLinks/>
      <CustomerEditPage />
      <Footer />
    </>
  )
}

export default CustomerEdit;