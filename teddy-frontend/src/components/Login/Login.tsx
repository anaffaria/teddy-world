import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Form } from "@unform/web";
import InputText from "../Form/InputText";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Authenticate } from "../../service/loginService";
import "./Login.css";
import Swal from "sweetalert2";
import { FaUserTie } from "react-icons/fa";
import { CustomerContextTiping, useCustomer } from "../../providers/Customer";
import { GetCustomer } from "../../service/customerService";

interface LoginProps {
  username: string;
  password: string;
}

function Login() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { setCustomer } = useCustomer() as CustomerContextTiping;

  async function handleSubmit(data: LoginProps) {
    try {
      const schema = Yup.object().shape({
        username: Yup.string()
          .email("Digite um e-mail válido.")
          .required("E-mail é obrigatório."),
        password: Yup.string().required("Senha é obrigatória."),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      const onError = () => {
        Swal.fire({
          icon: "error",
          title: "Login e/ou senha incorreta",
        });
      };

      const onSuccess = () => {
        const customer_id = localStorage.getItem("customer_id")!;
        const token = localStorage.getItem("token")!;

        function onSuccessAuth(response: any) {
          setCustomer(response?.data);
          history.push("/");
        }

        GetCustomer({
          id: customer_id,
          onSuccess: onSuccessAuth,
          token,
        });
      };

      Authenticate({
        username: data.username,
        password: data.password,
        onError,
        onSuccess,
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

  return (
    <>
      <main className="layout-main">
        <section className="layout-container layout-form m-auto h-100">
          <Form className="layout-box" onSubmit={handleSubmit} ref={formRef}>
            <div className="header-logo mb-4 mt-2">
              <img src={logoImg} alt="logo" />
            </div>

            <div className="col-12 mb-4 w-100">
              <label className="form-label">E-mail</label>
              <InputText
                type="email"
                name="username"
                id="username"
                className="form-control"
              />
            </div>

            <div className="col-12 mb-4 w-100">
              <label className="form-label">Senha</label>
              <InputText
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
            </div>

            <div className="row mb-2 mx-3 mt-5 justify-content-around">
              <div>
                <Link to="/">
                  <button type="submit" className="layout-buttom">
                    Voltar
                  </button>
                </Link>
              </div>
              <div>
                <button type="submit" className="layout-buttom">
                  Entrar
                </button>
              </div>
            </div>

            <div className="row mb-2 mt-4">
              <div className="col text-center">
                <Link to="/recuperarsenha">Esqueci minha senha</Link>
              </div>
            </div>

            <div className="col text-center">
              <Link to="/cadastro">
                <span>Ainda não sou cliente</span>
              </Link>
            </div>

            <div className="col-sm text-center mt-5">
              <Link to="/admin">
                <FaUserTie className="mb-2" fontSize={17} /> Administrador
              </Link>
            </div>
          </Form>
        </section>
      </main>
    </>
  );
}

export default Login;
