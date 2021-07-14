import Footer from "../components/Footer/Footer";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import CustomerOrdersPage from "../components/CustomerOrders/CustomerOrders";
import UserOn from "../components/UserOn/UserOn";

function CustomerOrders() {
  return (
    <>
      <UserOn />
      <QuickLinks />
      <CustomerOrdersPage />
      <Footer />
    </>
  );
}

export default CustomerOrders;
