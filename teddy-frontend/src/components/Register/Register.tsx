import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Select } from "../Form/SelectInput";
import { SaveCustomer } from "../../service/customerService";
import { Customer } from "../CustomerAccount/CustomerAccount";

import InputText from "../Form/InputText";
import * as Yup from "yup";
import Swal from "sweetalert2";

function Register() {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  async function handleSubmit(data: Customer) {
    try {
      const schema = Yup.object().shape({
        fullName: Yup.string().required("O nome é obrigatório."),
        email: Yup.string()
          .email("Digite um e-mail válido.")
          .required("E-mail é obrigatório."),
        cpf: Yup.string()
          .min(11, "Digite um CPF válido.")
          .max(11, "Digite um CPF válido.")
          .required("CPF é obrigatório"),
        gender: Yup.string()
          .test(
            "gender",
            "Seleção obrigatória",
            (value = "") => Number(value) >= 0
          )
          .required("Sexo é obrigatório"),
        telNumber: Yup.string().required("Telefone é obrigatório."),
        birthDate: Yup.string().required("Data de nascimento é obrigatória"),
        password: Yup.string()
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])/,
            "Necessita de caracter especial e uma letra maiúscula."
          )
          .min(8, "Senha muito curta, mínimo 8 caractéres")
          .required("Senha é obrigatório."),
        passwordConfirm: Yup.string()
          .required("Confirmação é obrigatória.")
          .oneOf([Yup.ref("password"), null], "As senhas não conferem"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      const onSuccess = (resp: any) => {
        Swal.fire({
          icon: "success",
          title: "Parabéns",
          text: "Sua conta foi criada com sucesso!",
          didClose: () => {
            history.push(`/cliente/${resp?.data?.id}/pedidos`);
          },
        });
      };

      const onError = () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado por aqui ;( Entre em contato com o administrador",
        });
      };

     SaveCustomer({ onSuccess, onError, data });
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
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <Form ref={formRef} onSubmit={handleSubmit} className="layout-box">
            <div className="form-row">
              <div className="col-12 col-sm-12 mt-2">
                <label>Nome</label>
                <InputText
                  type="text"
                  className="form-control"
                  placeholder="Nome completo "
                  name="fullName"
                  id="fullName"
                />
              </div>
              <div className="col-12 col-sm-12  mt-2">
                <label>E-mail</label>
                <InputText
                  type="text"
                  className="form-control"
                  placeholder="email@"
                  name="email"
                  id="email"
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>CPF</label>
                <InputText
                  type="text"
                  className="form-control"
                  placeholder="CPF"
                  name="cpf"
                  id="cpf"
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Sexo</label>
                <Select
                  name="gender"
                  id="gender"
                  className="form-control select_product"
                >
                  <option value="">Selecione</option>
                  <option value="0">Feminino</option>
                  <option value="1">Masculino</option>
                  <option value="2">Indefinido</option>
                </Select>
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Telefone</label>
                <InputText
                  type="text"
                  name="telNumber"
                  className="form-control"
                  id="telNumber"
                />
              </div>

              <div className="col-5 col-sm-6  mt-2">
                <label>Data de nascimento</label>
                <InputText
                  type="date"
                  className="form-control"
                  name="birthDate"
                  id="birthDate"
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Senha</label>
                <InputText
                  type="password"
                  className="form-control"
                  placeholder="senha"
                  name="password"
                  id="password"
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Confirmar Senha</label>
                <InputText
                  type="password"
                  className="form-control"
                  placeholder="confirmar senha"
                  name="passwordConfirm"
                  id="passwordConfirm"
                />
              </div>

              <div className="row mb-2 mx-3 mt-4 justify-content-around w-100">
                <div>
                  <Link to="/login">
                    <button type="submit" className="layout-buttom">
                      Voltar
                    </button>
                  </Link>
                </div>
                <div>
                  <button type="submit" className="layout-buttom">
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </section>
      </main>
    </>
  );
}

export default Register;
