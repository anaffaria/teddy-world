import { useHistory } from "react-router-dom";
import CustomerAccount from "../CustomerAccount/CustomerAccount";
import InputText from "../Form/InputText";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { Select } from "../Form/SelectInput";
import TextArea from "../Form/TextArea";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";

interface ContactUsProps {
  devolution: string;
  name: string;
  numberRequest: string;
  email: string;
  subject: string;
  justification: string;
}

function ContactUs() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { customer, setCustomer } = useCustomer() as CustomerContextTiping;

  async function handleSubmit(data: ContactUsProps) {
    try {
      const schema = Yup.object().shape({
        devolution: Yup.string()
          .required("Selecionar uma opção é obrigatório")
          .test(
            "Devolução",
            "Selecione uma opção",
            (value = "") => Number(value) > 0
          ),
        name: Yup.string().required("Nome é obrigatório"),
        numberRequest: Yup.string().required("N° pedido é obrigatório"),
        email: Yup.string().required("E-mail é obrigatório"),
        subject: Yup.string().required("Assunto é obrigatório"),
        justification: Yup.string().required("Justificativa obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      history.push("/atendimento");
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

  return (
    <>
      <CustomerAccount>
        <div className="row">
          <div className="col-sm-8 ">
            <Form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-row ">
                <div className="form-group  col-md-4 col-sm-4 mt-2">
                  <label>Departamento</label>
                  <Select
                    name="devolution"
                    id="devolution"
                    className="form-control select_product"
                  >
                    <option selected>Selecione</option>
                    <option value="1">Devolução</option>
                  </Select>
                </div>

                <div className="col-8 col-sm-8 mt-2">
                  <label>Nome</label>
                  <InputText
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                  />
                </div>

                {/* TODO: Each order has 0..1 Devolution Request. -> Done
                          Create a transient boolean prop to say which order has devolution requested -> Done
                          Filter select based on this prop.
                          Update only statuses of devolution request
                          Add a flag of devolution request on front end orders table (custoemr and/or admin)
                 */}
                <div className="col-4 col-sm-4 mt-2">
                  <label>N° do pedido</label>
                  <Select
                    name="numberRequest"
                    className="form-control"
                    placeholder="Número do pedido"
                  >
                    <option value="">Selecione</option>
                  </Select>
                </div>
                <div className="col-8 col-sm-8 mt-2">
                  <label>E-mail</label>
                  <InputText
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>

                <div className="col-12 col-sm-12  mt-2">
                  <label>Justificativa</label>
                  <TextArea
                    name="justification"
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
