import CustomerAccount, { Customer } from "../CustomerAccount/CustomerAccount";
import { IoMdAddCircle } from "react-icons/io";
import "./CustomerEdit.css";
import { BiEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { Address, AddressForm } from "../Forms/AddressForm";
import { Form } from "@unform/web";
import InputText from "../Form/InputText";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Select } from "../Form/SelectInput";
import { axiosInstance } from "../../service/serviceInstance";
import Swal from "sweetalert2";
import { SaveCustomer } from "../../service/customerService";

function CustomerEdit(customer: Customer) {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [address, setAddress] = useState<Address>();

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: Customer) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("O e-mail é obrigatório"),
        fullName: Yup.string().required("Nome é obrigatório"),
        cpf: Yup.string()
          .required("CPF é obrigatório")
          .test("CPF", "CPF inválido", (value = "") => {
            return /^\d+$/.test(value);
          })
          .min(11, "CPF inválido"),
        gender: Yup.string()
          .test(
            "gender",
            "Selecione uma opção",
            (value = "") => Number(value) >= 0
          )
          .required("Sexo é obrigatório"),
        telNumber: Yup.string().required("Telefone principal obrigatório"),
        birthDate: Yup.string().required("Data de nascimento é obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      data.id = customer.id;

      const onSuccess = () => {
        Swal.fire({
          icon: "success",
          title: "Dados Atualizados!",
        });
      };

      const onError = () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado por aqui!",
        });
      };

      SaveCustomer({ data, onSuccess, onError });
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

  useEffect(() => {
    formRef?.current?.setData(customer);
  }, [customer]);

  function mapAddresses(addressType: number) {
    return customer.addressList?.map((address, index) => {
      if (address.addressType !== addressType) return [];
      return (
        <li key={index}>
          {`${address.street}, nº ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, CEP: ${address.postalCode}`}
          <div className="row mt-3 mb-4 d-flex justify-content-end">
            <div className="mr-3 ml-2">
              <button
                className="btn-sm btn btn-outline-primary"
                onClick={() => {
                  setAddress(address);
                  setIsOpenForm(true);
                }}
              >
                <BiEditAlt fontSize={20} />
                Editar
              </button>
            </div>
            <div className="mr-3 ml-2">
              <button
                className="btn-sm btn btn-outline-danger"
                onClick={() => {
                  axiosInstance
                    .delete(`/address/${address.id}`)
                    .then((resp) => {
                      if (resp.data.hasError) throw new Error(resp.data?.message);
                      Swal.fire({
                        icon: "success",
                        title: "Dados Atualizados!",
                      });
                    })
                    .catch((err) => {
                      console.log(err);
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo deu errado por aqui ;( Entre em contato com o administrador",
                      });
                    });
                  if (customer.setCustomer) {
                    customer.setCustomer((prev) => {
                      const newCustomerAddress = Object.assign({}, prev);
                      newCustomerAddress.addressList =
                        prev?.addressList?.filter(
                          (el) => el.id !== address.id
                        ) || [];
                      return newCustomerAddress;
                    });
                  }
                }}
              >
                <BsTrashFill fontSize={20} /> Excluir
              </button>
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <CustomerAccount>
        <div className="row">
          <div className="col-sm-8 ">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row ">
                <div className="col-12 col-sm-12 mt-2">
                  <label>E-mail</label>
                  <InputText
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                    name="email"
                  />
                </div>
                <div className="col-12 col-sm-12  mt-2">
                  <label>Nome</label>
                  <InputText
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    name="fullName"
                  />
                </div>

                <div className="col-8 col-sm-8  mt-2">
                  <label>CPF</label>
                  <InputText
                    type="text"
                    className="form-control"
                    placeholder="CPF"
                    name="cpf"
                    disabled
                  />
                </div>

                <div className="col-6 col-sm-4 mt-2">
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

                <div className="col-8 col-sm-8  mt-2">
                  <label>Telefone principal</label>
                  <InputText
                    type="text"
                    name="telNumber"
                    className="form-control"
                    placeholder="Telefone primario"
                  />
                </div>
                <div className="col-6 col-sm-4  mt-2">
                  <label>Data de nascimento:</label>
                  <InputText
                    type="date"
                    className="form-control"
                    name="birthDate"
                  />
                </div>

                <div className="col mt-5 mb-5 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="buttom btn-block custumer_edit-buttom"
                  >
                    Alterar cadastro
                  </button>
                </div>
              </div>
            </Form>
          </div>

          <div className="col-4 col-sm-4">
            {!isOpenForm && (
              <>
                <div className={`${isOpenForm ? "d-none" : ""} border p-2`}>
                  <span>Endereços de Entrega:</span>
                  <ul className="m-0 p-0 mt-3">{mapAddresses(1)}</ul>

                  <hr />

                  <span>Endereços de Cobrança:</span>
                  <ul className="m-0 p-0 mt-3">{mapAddresses(0)}</ul>

                  
                </div>
              </>
            )}
            {isOpenForm && (
              <aside>
                <AddressForm
                  className="mt-2"
                  customer={customer}
                  address={address}
                  setCustomer={customer.setCustomer}
                  setIsFormOpen={setIsOpenForm}
                />
                <button
                  className="btn btn-secondary btn-block mt-4"
                  onClick={() => setIsOpenForm(false)}
                >
                  Cancelar
                </button>
              </aside>
            )}
            {!isOpenForm && (
              <div
                className="col-12 col-sm-12  mt-3 align-items-center mt-4 border"
                onClick={() => {
                  setIsOpenForm(true);
                  setAddress(undefined);
                }}
              >
                <IoMdAddCircle
                  type="button"
                  className="col-12 align-items-center"
                  size={40}
                  color={"#FA98AF"}
                />
                <label className=" col-12 font-weight-bold text-center">
                  Adicionar novo endereço
                </label>
              </div>
            )}
          </div>
        </div>
      </CustomerAccount>
    </>
  );
}

export default CustomerEdit;
