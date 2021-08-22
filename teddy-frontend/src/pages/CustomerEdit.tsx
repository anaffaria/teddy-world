import { useEffect, useState } from "react";
import CustomerEditComponent from "../components/CustomerEdit/CustomerEdit";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { GetCustomer } from "../service/customerService";
import { Customer } from "../components/CustomerAccount/CustomerAccount";

function CustomerEdit() {
  const [customer, setCustomer] = useState<Customer>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    Swal.fire({
      title: "Aguarde um momento",
      html: "<p>Estamos buscando suas informações.</p><img width=150 height=150 src='https://i.pinimg.com/originals/2f/74/25/2f742539b8b1ad66d11d56600b27c8c3.gif'></img>",
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    const success = () => {
      setTimeout(() => {
        Swal.close();
      }, 2000);
    };

    GetCustomer({ id, onSuccess: success }).then((resp) => setCustomer(resp));
  }, [id]);

  return (
    <>
      <CustomerEditComponent {...customer} setCustomer={setCustomer} />
    </>
  );
}

export default CustomerEdit;
