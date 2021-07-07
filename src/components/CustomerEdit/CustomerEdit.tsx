import { Form } from "react-bootstrap";
import CustomerAccount from "../CustomerAccount/CustomerAccount";

function CustomerEdit() {
  return (
    <>
      <CustomerAccount>
        <Form>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" />
          </div>

          <div className="form-group">
            <label>Alterar Senha:</label>
            <input className="form-control" type="password" />
          </div>

          <div className="form-group">
            <label>Confirmar Nova Senha:</label>
            <input className="form-control" type="password" />
          </div>
        </Form>
      </CustomerAccount>
    </>
  );
}

export default CustomerEdit;
