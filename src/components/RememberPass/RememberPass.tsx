import { Link, useHistory } from "react-router-dom";
import Gif from "../../components/RememberPass/img/gif.gif";
import InputText from "../Form/InputText";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

interface RebemberPassProps {
  rememberPass: string;
}

function RebemberPass() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: RebemberPassProps) {
    console.log(data)
    try {
      const schema = Yup.object().shape({
        rememberPass: Yup.string()
          .email("Digite um e-mail válido.")
          .required("E-mail é obrigatório."),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      history.push("/recuperarsenha");
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
          <Form className="layout-box form-row" onSubmit={handleSubmit} ref={formRef} >
            <div className="header-logo mt-5">
              <img src={Gif} alt="gif" />
            </div>
            <div className="col-12 mb-5 text-center">
              <h4>Esqueci minha Senha</h4>
            </div>

            <div className="col-12 mb-4">
              <label className="form-label">E-mail:</label>
              <InputText
                type="email"
                name="rememberPass"
                id="rememberPass"
                className="form-control"
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
                 Enviar
              </button>

            </div>
          </div>

            
          </Form>
        </section>
      </main>
    </>
  );
}

export default RebemberPass;
