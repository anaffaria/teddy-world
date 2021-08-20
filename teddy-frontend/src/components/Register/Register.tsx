import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputText from "../Form/InputText";
import * as Yup from "yup";
import { Select } from "../Form/SelectInput";
import { axiosInstance } from "../../service/serviceInstance";
import Swal from "sweetalert2";

export interface Customer {
  id?: number;
  createdAt?: string;
  deletedAt?: string;
  fullName?: string;
  email?: string;
  cpf?: string;
  gender?: string;
  birthDate?: string;
  telNumber?: string;
  password?: string;
  passwordConfirm?: string;
}


function Register(customer: Customer) {

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
          .required("CPF é obrigatório"),
        gender: Yup.string()
          .test(
            "gender",
            "Seleção obrigatória",
            (value = "") => Number(value) > 0
          )
          .required("Sexo é obrigatório"),
        telNumber: Yup.string().required("Telefone é obrigatório."),
        birthDate: Yup.string().required("Data de nascimento é obrigatória"),
        password: Yup.string()
          .matches(
            /^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/,
            "Necessita de caracter especial."
          )
          .min(6, "Senha muito curta, mínimo 6 caractéres")
          .required("Senha é obrigatório."),
        passwordConfirm: Yup.string()
          .required("Confirmação é obrigatória.")
          .oneOf([Yup.ref("password"), null], "As senhas não conferem"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      data.id = customer.id

      axiosInstance
        .post("/customer", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
          },
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado por aqui ;( Entre em contato com o administrador",
          });
        });

      // history.push("/cliente/pedidos");
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

  // TODO: standby function to fill iniital data of Form
  // add this code on Form properties -> initialData={initialData}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useEffect(() => {
    formRef?.current?.setData(customer)
  }, [customer])

  const initialData: Customer = {
    id: customer.id,
    createdAt: customer.createdAt,
    deletedAt: customer.deletedAt,
    fullName: customer.fullName,
    email: customer.email,
    cpf: customer.cpf,
    gender: customer.gender,
    birthDate: customer.telNumber,
    telNumber: customer.telNumber,
    password: customer.password,
    passwordConfirm: customer.passwordConfirm,
  };

  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData} className="layout-box">
            <div className="form-row">
              <div className="col-12 col-sm-12 mt-2">
                <label>Nome</label>
                <InputText
                  type="text"
                  className="form-control"
                  placeholder="Nome completo "
                  name="fullName"
                  defaultValue={customer?.fullName}
                />
              </div>
              <div className="col-12 col-sm-12  mt-2">
                <label>E-mail</label>
                <InputText
                  type="text"
                  className="form-control"
                  placeholder="email@"
                  name="email"
                  defaultValue={customer?.email}
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>CPF</label>
                <InputText
                  type="text"
                  className="form-control"
                  placeholder="CPF"
                  name="cpf"
                  defaultValue={customer?.cpf}
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Sexo</label>
                <Select
                  name="gender"
                  id="gender"
                  className="form-control select_product"
                  defaultValue={customer?.gender}
                >
                  <option selected>Selecione</option>
                  <option value="1">Feminino</option>
                  <option value="2">Masculino</option>
                  <option value="3">Indefinido</option>
                </Select>
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Telefone principal</label>
                <InputText
                  type="text"
                  name="telNumber"
                  className="form-control"
                  placeholder="Telefone Principal"
                  defaultValue={customer?.telNumber}
                />
              </div>

              <div className="col-5 col-sm-6  mt-2">
                <label>Data de nascimento</label>
                <InputText
                  type="date"
                  className="form-control"
                  name="birthDate"
                  defaultValue={customer?.birthDate}
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Senha</label>
                <InputText
                  type="password"
                  className="form-control"
                  placeholder="senha"
                  name="password"
                  defaultValue={customer?.password}
                />
              </div>

              <div className="col-6 col-sm-6  mt-2">
                <label>Confirmar Senha</label>
                <InputText
                  type="password"
                  className="form-control"
                  placeholder="confirmar senha"
                  name="passwordConfirm"
                  defaultValue={customer?.passwordConfirm}
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