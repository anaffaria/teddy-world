import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { NewCouponForm } from "../../../components/Forms/NewCoupon";

function AdminCouponsNew() {
  
  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <div className="d-flex ">
              <h3>Cadastrar novo Cupons</h3>
            </div>

            <hr />
            <div className="d-flex mt-3">
              <NewCouponForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminCouponsNew;
