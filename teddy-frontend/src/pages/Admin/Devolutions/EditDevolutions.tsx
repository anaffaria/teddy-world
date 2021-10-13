import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import "../../../assets/Global.css";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import InputText from "../../../components/Form/InputText";
import { Select } from "../../../components/Form/SelectInput";
import { Devolution } from "../../../types/devolution";
import { GetDevolutionRequest } from "../../../service/devolutionService";
import { useParams } from "react-router-dom";
import { StatusDevolution } from "../../../components/Utils/StatusesMap";

interface DevolutionData {
  value: number;
  response: string;
  status: string;
}

export function EditDevolution() {
  const [devolution, setDevolution] = useState<Devolution>();
  const token = localStorage.getItem("token") || "";
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;
    const onSuccess = (resp: any) => {
      setDevolution(resp.data);
    };

    const onError = () => {};

    GetDevolutionRequest({
      token,
      id,
      onError,
      onSuccess,
    });
  }, [id, setDevolution, token]);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  async function handleSubmit(data: DevolutionData) {
    try {
      const schema = Yup.object().shape({
        value: Yup.string().test(
          "Valor",
          "Valor a ser devolvido é inválido",
          (value) => {
            const formData = formRef.current?.getData();
            if (formData?.status === "finished") {
              try {
                const numberValue = Number(value);
                return numberValue > 0;
              } catch (error) {
                return false;
              }
            }
            return true;
          }
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      history.push("/admin/devolucoes");
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

  const renderProducts = () => {
    return devolution?.order?.itemList.map((item, index) => {
      return (
        <div className="form-group form-control h-auto">
          <div className="d-flex">
            <p className="mr-3">{item.teddy.title}</p>
            <p>R$ {item.teddy.priceFactory} * {item.amount}</p>
          </div>

          <span>Total R$: </span>
          <span>
            {Number(item.teddy.priceFactory * item.amount).toFixed(2)}
          </span>
        </div>
      );
    });
  };

  const renderStatuses = () => {
    const optionsList: JSX.Element[] = [];
    StatusDevolution.forEach((key, value) => {
      optionsList.push(
        <option value={value} key={value}>
          {key}
        </option>
      );
    });
    return optionsList.map((el, index) => {
      return el;
    });
  };

  return (
    <>
      <div className="topbar"></div>
      <AdminNavBar />
      <main className="web-content">
        <div className="main-content-admin">
          <div className="container">
            <div className="d-flex ">
              <h3>Atualizar Status da Devolução</h3>
            </div>

            <hr />
            <div className="d-flex mt-3">
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                className="form-style"
              >
                <div className="form-group">
                  <label htmlFor="orderId">Código da devolução</label>
                  <p className="form-control">{devolution?.id}</p>
                </div>

                <span>Produtos:</span>
                {renderProducts()}

                <span>Problema:</span>
                <p className="form-group form-control h-auto">
                  {devolution?.reason}
                </p>

                <div className="form-group">
                  <label htmlFor="response">Resposta:</label>
                  <InputText name="response" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="value">Valor:</label>
                  <InputText name="value" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <Select
                    name="status"
                    className="form-control"
                    defaultValue={devolution?.statusDevolution}
                  >
                    {renderStatuses()}
                  </Select>
                </div>

                <div className="d-flex justify-content-between mt-5">
                  <button className="buttom w-auto">Atualizar Status</button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    Voltar
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
