import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { NewTeddyForm } from "../../../components/Forms/NewTeddyForm";

export function NewTeddy() {
  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <div className="d-flex ">
              <h3>Cadastrar Nova Pelúcia </h3>
            </div>

            <hr />
            <div className="d-flex mt-3">
              <NewTeddyForm/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
