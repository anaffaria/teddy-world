import { useHistory } from "react-router-dom";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { Table } from "react-bootstrap";
import { AiOutlineBarcode } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillSound } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";
import { useEffect } from "react";
import { GetCustomerDevolutions } from "../../service/customerService";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import {
  StatusDevolution,
  StatusBadge,
} from "../../components/Utils/StatusesMap";

function CustomerContactUs() {
  const history = useHistory();
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;
  const token = localStorage.getItem("token") || "";

  async function handleSubmit() {
    history.push("/atendimento/novo");
  }

  useEffect(() => {
    const onSuccess = (response: any) => {
      setCustomer((prev) => {
        let customerNew = Object.assign({}, prev);

        customerNew.devolutions = response.data;

        return customerNew;
      });
    };

    const onError = (err: AxiosError) => {
      if (err.response!.status! >= 401 && err.response!.status! <= 403) {
        Swal.fire({
          icon: "warning",
          title: "Para acessar este recurso você precisa estar logado",
        });

        history.push("/login");
        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops, tivemos um erro por aqui.. Tente novamente mais tarde ;/",
      });
    };
    GetCustomerDevolutions({
      id: `${customer?.id}`,
      onError,
      onSuccess,
      token,
    });
  }, [customer?.id, setCustomer, history, token]);

  const renderDevolutions = () => {
    return customer?.devolutions?.map((devolution, index) => {
      return (
        <tr key={index}>
          <td>{devolution.id}</td>
          <td>{devolution.createdAt}</td>
          <td>{devolution.order?.id}</td>
          <td>
            <span className={StatusBadge.get(devolution!.statusDevolution!)}>
              {StatusDevolution.get(devolution!.statusDevolution!)}
            </span>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <CustomerAccount>
        <Table>
          <thead>
            <tr>
              <th>
                <AiOutlineBarcode size={20} className="icon" /> Nº Protocolo
              </th>
              <th>
                <MdDateRange size={20} className="icon" /> Data da Solicitação
              </th>
              <th>
                <AiOutlineUnorderedList size={20} className="icon" /> Nº Pedido
              </th>
              <th>
                <AiFillSound size={20} className="icon" /> Situação
              </th>
            </tr>
          </thead>
          <tbody>{renderDevolutions()}</tbody>
        </Table>

        <div className="col-sm-3 mt-5 mb-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="buttom btn-block custumer_edit-buttom"
          >
            Novo Atendimento
          </button>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerContactUs;
