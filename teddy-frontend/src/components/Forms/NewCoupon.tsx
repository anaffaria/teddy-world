import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import InputText from "../Form/InputText";
import * as Yup from "yup";

import "../../assets/Global.css";
import { Coupon } from "../../Types/coupon";
import Swal from "sweetalert2";
import { GetCoupon, SaveCoupon } from "../../service/couponService";


export function NewCouponForm() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [coupon, setCoupon] = useState<Coupon>();
  const token = sessionStorage.getItem("token") || "";
  
  useEffect(() =>{
    GetCoupon({id: id})
    .then((resp) => {
      setCoupon(resp);
    })
    .catch((err) => console.log(err));
  },[id]) 


  async function handleSubmit(data: Coupon) {
    try {
      const schema = Yup.object().shape({
        code: Yup.string()
          .required("Código é obrigatório")
          .min(5, "O código deve ter no mínimo 5 caractéres"),
        value: Yup.string().required("Valor é obrigatório"),
        amount: Yup.string().required("Quantidade é obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      
      const onSuccess = () => {
        Swal.fire({
          icon: "success",
          title: "Dados Atualizados!",
        });
      };

      const onError = (resp: string) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Ocorreu um erro durante a operação`,
        });
      };

      if (id) data.id = Number(id);
      
      SaveCoupon({ data, onSuccess, onError, token })

      //history.push("/admin/cupons");
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
    <Form ref={formRef} onSubmit={handleSubmit} className="form-style">
      <div className="form-group">
        <label htmlFor="code">Código do cupom</label>
        <InputText name="code" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="value">Valor do cupom</label>
        <InputText name="value" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Quantidade do cupom</label>
        <InputText name="amount" className="form-control" />
      </div>

      <div className="d-flex justify-content-between mt-5">
        <button className="buttom">Criar Cupom</button>
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
  );
}
