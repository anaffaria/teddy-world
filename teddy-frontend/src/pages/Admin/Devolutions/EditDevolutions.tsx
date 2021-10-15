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
import {
  GetDevolutionRequest,
  UpdateDevolutionRequest,
} from "../../../service/devolutionService";
import { useParams } from "react-router-dom";
import { StatusDevolution } from "../../../components/Utils/StatusesMap";
import Swal from "sweetalert2";

interface DevolutionData {
  value: number;
  answer: string;
  statusDevolution: string;
  id?: string;
  reason?: string;
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
            if (formData?.statusDevolution === "ACCEPTED") {
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
        answer: Yup.string().test(
          "Resposta",
          "A Resposta deve conter uma pequena descrição",
          (value) => {
            const formData = formRef.current?.getData();
            if (
              formData?.statusDevolution === "REFUSED" ||
              formData?.statusDevolution === "ACCEPTED"
            ) {
              if (formData?.answer?.length <= 3) return false;
            }
            return true;
          }
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      data.id = id;
      data.reason = devolution?.reason;
      if (!data.value) data.value = 0;

      console.log(data);

      formRef.current?.setErrors({});

      const onSuccess = () => {
        Swal.fire({
          icon: "success",
          title: "Dados salvos com sucesso :D",
        });
      };

      const onError = () => {
        Swal.fire({
          icon: "error",
          title: "Ooops, tivemos um erro por aqui ;/",
        });
      };

      UpdateDevolutionRequest({
        data,
        token,
        onError,
        onSuccess,
        id,
      });

      // history.push("/admin/devolucoes");
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
            <p>
              R$ {item.teddy.priceFactory} * {item.amount}
            </p>
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
      console.log("default check ", devolution?.statusDevolution === value);
      optionsList.push(
        <option value={value} key={value}>
          {key}
        </option>
      );
    });
    return optionsList.map((el) => {
      return el;
    });
  };

  if (!devolution) return <h1>Carregando</h1>;

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
                initialData={{
                  ...devolution,
                  statusDevolution: devolution?.statusDevolution,
                }}
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
                  <label htmlFor="answer">Resposta:</label>
                  <InputText name="answer" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="value">Valor:</label>
                  <InputText name="value" className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="statusDevolution">Status:</label>
                  <Select name="statusDevolution" className="form-control">
                    {renderStatuses()}
                  </Select>
                </div>

                <div className="d-flex justify-content-between mt-5">
                  <button className="buttom w-auto">Atualizar Status</button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      history.push("/admin/devolucoes");
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
