import { useHistory } from "react-router-dom";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { Select } from "../Form/SelectInput";
import TextArea from "../Form/TextArea";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";
import Swal from "sweetalert2";
import { SendDevolutionRequest } from "../../service/devolutionService";

interface ContactUsProps {
  orderID: string;
  reason: string;
}

function ContactUs() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;
  const token = localStorage.getItem("token") || "";

  async function handleSubmit(data: ContactUsProps) {
    try {
      const schema = Yup.object().shape({
        orderID: Yup.string().required("N° pedido é obrigatório"),
        reason: Yup.string().required("Justificativa obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      const finalData = {
        reason: data.reason,
        order: {
          id: Number(data.orderID),
        },
      };

      const onSuccess = (resp: any) => {
        Swal.fire({
          icon: "success",
          title: "Requisição enviada com sucesso",
          titleText:
            "Agora é só aguardar que um de nossos colabores irá responder o seu pedido!",
        });
        history.push(`/atendimento/${customer?.id}`);

        setCustomer((prev) => {
          const newCustomer = Object.assign({}, prev);
          newCustomer.devolutions?.push(resp.data);
          let index = newCustomer.ordersDTOS?.findIndex(
            (order) => `${order.id}` === data.orderID
          );
          if (index) {
            newCustomer!.ordersDTOS![index]!.hasDevolution = true;
          }
          return newCustomer;
        });
      };

      const onError = () => {
        Swal.fire({
          icon: "error",
          title: "Deu ruim aqui :/",
        });
      };

      SendDevolutionRequest({
        onSuccess,
        onError,
        token,
        id: `${customer?.id}`,
        data: finalData,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessage: { [key: string]: string } = {};

        error.inner.forEach((err) => {
          if (err.path) errorMessage[err.path] = err.message;
        });

        formRef.current?.setErrors(errorMessage);
      }
    }
  }

  const renderOrdersFinished = () => {
    return customer?.ordersDTOS?.map((order, index) => {
      if (order.status === "Entregue" && !order.hasDevolution) {
        return (
          <option value={order.id} key={index}>
            {order.id}
          </option>
        );
      }
      return undefined;
    });
  };

  return (
    <>
      <CustomerAccount>
        <div className="row">
          <div className="col-sm-8 ">
            <Form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-row ">
                {/* TODO: Each order has 0..1 Devolution Request. -> Done
                          Create a transient boolean prop to say which order has devolution requested -> Done
                          Filter select based on this prop. -> Done
                          Update only statuses of devolution request -> Done
                          Add a flag of devolution request on front end orders table (custoemr and/or admin) -> Done (customer)
                          Finish request to new devolution request
                          Update status of devolution on admin
                          Update checkout flow
                 */}
                <div className="col-12 mt-2">
                  <label>N° do pedido</label>
                  <Select
                    name="orderID"
                    className="form-control"
                    placeholder="Número do pedido"
                  >
                    <option value="">Selecione</option>
                    {renderOrdersFinished()}
                  </Select>
                </div>

                <div className="col-12 col-sm-12  mt-2">
                  <label>Justificativa</label>
                  <TextArea
                    name="reason"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></TextArea>
                </div>
                <div className="col mt-5 mb-5 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="buttom btn-block custumer_edit-buttom"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </CustomerAccount>
    </>
  );
}

export default ContactUs;
