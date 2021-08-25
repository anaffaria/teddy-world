import CustomerAccount, { Customer } from "../CustomerAccount/CustomerAccount";
import { useHistory, useParams } from "react-router-dom";
import InputText from "../Form/InputText";
import { useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { GetCustomer, UpdatePassword } from "../../service/customerService";
import "./CustomerPass.css";
import Swal from "sweetalert2";
import * as Yup from "yup";

interface CustumerPassProps {
  password: string;
  newPassword: string;
  passwordConfirm: string;
  id?: number;
}

function CustomerPass() {
  const [customer, setCustomer] = useState<Customer>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    Swal.fire({
      title: "Aguarde um momento",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    const success = () => {
      setTimeout(() => {
        Swal.close();
      }, 1000);
    };

    GetCustomer({ id, onSuccess: success }).then((resp) => setCustomer(resp));
  }, [id]);

  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: CustumerPassProps) {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .min(8, "A senha deve conter 8 dígitos")
          .required("Senha é obrigatória."),
        newPassword: Yup.string()
          .min(8, "A senha deve conter 8 dígitos")
          .required("Nova Senha é obrigatória."),
        passwordConfirm: Yup.string()
          .min(8, "A senha deve conter 8 dígitos")
          .required("Confirmação da senha é obrigatória."),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      data.id = customer?.id;

      const onSuccess = () => {
        Swal.fire({
          icon: "success",
          title: "Dados Atualizados!",
        });
      };

      const onError = (resp: any) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<h5>Algo deu errado por aqui</h5>
            <p>${resp}</p>`,
        });
      };

      console.log(data);

      UpdatePassword({ data, onError, onSuccess });

      // history.push("/cliente/alterar_dados");
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
          <Form
            className="form-row d-flex col-sm-12"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="col-12 col-sm-4">
              <label>Digite sua senha atual</label>
              <InputText
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="senha atual"
              />
            </div>

            <div className="col-6 col-sm-4">
              <label>Digite a nova senha</label>
              <InputText
                type="password"
                name="newPassword"
                id="newPassword"
                className="form-control"
                placeholder="nova senha"
              />
            </div>

            <div className="col-6 col-sm-4">
              <label>Repita sua nova senha</label>
              <InputText
                type="password"
                name="passwordConfirm"
                className="form-control"
                placeholder="repita a nova senha"
              />
            </div>

            <div className="col-sm-3 mt-5 mb-5">
              <button
                type="submit"
                className="buttom btn-block custumer_edit-buttom"
              >
                Salvar Alterações
              </button>
            </div>
          </Form>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerPass;
