import Footer from "../components/Footer/Footer";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import CustomerEditPage from "../components/CustomerEdit/CustomerEdit";
import UserOn from "../components/UserOn/UserOn";

function CustomerEdit() {
  return (
    <>
      <UserOn />
      <QuickLinks/>
      <CustomerEditPage />
      <Footer />
    </>
  )
}

export default CustomerEdit;