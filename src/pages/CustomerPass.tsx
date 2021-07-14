import Footer from "../components/Footer/Footer";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import CustomerPassPage from "../components/CustomerPass/CustomerPass";
import UserOn from "../components/UserOn/UserOn";

function CustomerPass() {
  return (
    <>
      <UserOn />
      <QuickLinks />
      <CustomerPassPage/>
      <Footer />
    </>
  );
}

export default CustomerPass;
