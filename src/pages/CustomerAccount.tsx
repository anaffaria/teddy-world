import PageCustomerAccount from "../components/CustomerAccount/CustomerAccount";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QuickLinks from "../components/QuickLinks/QuickLinks";

function CustomerAccount() {
  return (
    <>
      <Header />
      <QuickLinks/>
      <PageCustomerAccount />
      <Footer />
    </>
  );
}

export default CustomerAccount;
