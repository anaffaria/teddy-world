import CustomerAccountPage from "../components/CustomerAccount/CustomerAccount";
import Footer from "../components/Footer/Footer";
import UserOn from "../components/UserOn/UserOn";
import QuickLinks from "../components/QuickLinks/QuickLinks";

function CustomerAccount() {
  return (
    <>
      <UserOn/>
      <QuickLinks/>
      <CustomerAccountPage />
      <Footer />
    </>
  );
}

export default CustomerAccount;
