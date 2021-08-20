import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import RegisterComponent, { Customer } from "../components/Register/Register";
import { axiosInstance } from "../service/serviceInstance";

function Register() {
  
  const [customer, setCustomer] = useState<Customer>();
  
  // useEffect(() => {
  //   Swal.fire({
  //     title: "Aguarde um momento",
  //     html: "<p>Estamos buscando suas informações.</p><img width=150 height=150 src='https://i.pinimg.com/originals/2f/74/25/2f742539b8b1ad66d11d56600b27c8c3.gif'></img>",
  //     allowOutsideClick: false,
  //     showConfirmButton: false,
  //     // didOpen: () => {
  //     // default loading animation
  //     //   Swal.showLoading()
  //     // }
  //   });

  //   axiosInstance
  //     .get("customers")
  //     .then((response) => {
  //       setCustomer(response.data as Customer);
  //       setTimeout(() => {
  //         Swal.close();
  //       }, 2000);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Algo deu errado por aqui ;( Entre em contato com o administrador",
  //       });
  //     });
  // }, []);

  return (

    <>
      <RegisterComponent {...customer}/>
    </>
  );
}

export default Register;
