import { useEffect } from "react";
import CustomerEditComponent from "../components/CustomerEdit/CustomerEdit";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { GetCustomer } from "../service/customerService";
import { CustomerContextTiping, useCustomer } from "../providers/Customer";
import { useHistory } from "react-router";
import { AxiosError } from "axios";

function CustomerEdit() {
  const { setCustomer } = useCustomer() as CustomerContextTiping;
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

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

    const token = localStorage.getItem("token") || "";

    const onError = (err: AxiosError) => {
      Swal.fire({
        icon: "warning",
        title: "Você precisa estar logado para acessar este recurso",
      });

      history.push("/login");
    };

    GetCustomer({ id, onSuccess: success, token, onError }).then((resp) =>
      setCustomer(resp)
    );
  }, [id, setCustomer, history]);

  return (
    <>
      <CustomerEditComponent />
    </>
  );
}

export default CustomerEdit;
