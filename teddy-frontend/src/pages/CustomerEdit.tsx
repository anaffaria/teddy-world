import { useEffect, useState } from "react";
import CustomerEditComponent, {
  Customer,
} from "../components/CustomerEdit/CustomerEdit";
import Swal from "sweetalert2";
import { axiosInstance } from "../service/serviceInstance";

function CustomerEdit() {
  const [customer, setCustomer] = useState<Customer>();

  useEffect(() => {
    Swal.fire({
      title: "Aguarde um momento",
      html: "<p>Estamos buscando suas informações.</p><img width=200 height=170 src='https://i.imgur.com/b2bPz7v.gif'></img>",
      allowOutsideClick: false,
      showConfirmButton: false,
      // didOpen: () => {
      // default loading animation
      //   Swal.showLoading()
      // }
    });

    axiosInstance
      .get("customer/13")
      .then((response) => {
        setCustomer(response.data as Customer);
        setTimeout(() => {
          Swal.close();
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado por aqui ;( Entre em contato com o administrador",
        });
      });
  }, []);

  return (
    <>
      <CustomerEditComponent {...customer}/>
    </>
  );
}

export default CustomerEdit;
