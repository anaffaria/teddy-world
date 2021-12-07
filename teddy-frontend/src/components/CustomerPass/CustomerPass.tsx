import CustomerAccount from "../CustomerAccount/CustomerAccount";
import { useParams } from "react-router-dom";
import InputText from "../Form/InputText";
import { useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
<<<<<<< HEAD:src/components/CustomerPass/CustomerPass.tsx
import Swal from "sweetalert2";
=======
import { GetCustomer, UpdatePassword } from "../../service/customerService";
import "./CustomerPass.css";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { Customer } from "../../types/customer";
import { useHistory } from "react-router";
import { AxiosError } from "axios";
>>>>>>> 4d5e0368239b217fd2030850d766cc3c0512e58b:teddy-frontend/src/components/CustomerPass/CustomerPass.tsx

interface CustumerPassProps {
  password: string;
  newPassword: string;
  passwordConfirm: string;
  id?: number;
}

function CustomerPass() {
  const [customer, setCustomer] = useState<Customer>();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const token = localStorage.getItem("token") || "";

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

    const onError = (err: AxiosError) => {
      Swal.fire({
        icon: "warning",
        title: "Você precisa estar logado para acessar este recurso",
      });

      history.push("/login");
    }

    GetCustomer({ id, onSuccess: success, token, onError }).then((resp) =>
      setCustomer(resp)
    );
  }, [id, history, token]);

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: CustumerPassProps) {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .matches(
            /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
            "Necessita de caracter especial."
          )
          .min(6, "Senha muito curta, mínimo 8 caractéres")
          .required("Senha é obrigatório."),
        newPassword: Yup.string()
          .matches(
            /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
            "Necessita de caracter especial."
          )
          .min(6, "A senha deve conter 8 dígitos")
          .required("Nova Senha é obrigatória."),
<<<<<<< HEAD:src/components/CustomerPass/CustomerPass.tsx
        CompareNewPassword: Yup.string()
          .matches(
            /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
            "Necessita de caracter especial."
          )
          .min(6, "A senha deve conter 8 dígitos")
          .required("Confirmação da senha é obrigatória.")
          .oneOf([Yup.ref("newPassword"), null], "As senhas não conferem"),
=======
        passwordConfirm: Yup.string()
          .min(8, "A senha deve conter 8 dígitos")
          .required("Confirmação da senha é obrigatória."),
>>>>>>> 4d5e0368239b217fd2030850d766cc3c0512e58b:teddy-frontend/src/components/CustomerPass/CustomerPass.tsx
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

<<<<<<< HEAD:src/components/CustomerPass/CustomerPass.tsx
      Swal.fire({
        icon: "success",
        title: "Dados Alterados com sucesso!",
        text: "",
        didClose: () => {
          history.push("/cliente/alterar_senha");
        },
      });

=======
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

      if (token === null) {
        Swal.fire({
          icon: "warning",
          title: "Você precisa estar logado para acessar este recurso",
        });

        history.push("/login");
        return;
      }

      UpdatePassword({ data, onError, onSuccess, token });
>>>>>>> 4d5e0368239b217fd2030850d766cc3c0512e58b:teddy-frontend/src/components/CustomerPass/CustomerPass.tsx
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
                id="passwordConfirm"
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
