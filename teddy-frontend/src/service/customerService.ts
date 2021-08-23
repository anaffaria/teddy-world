import { Customer } from "../components/CustomerAccount/CustomerAccount";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetCustomer({
  onSuccess,
  id,
  onError,
}: ServiceTypes<Customer>) {
  let customer = undefined;
  await axiosInstance
    .get(`customer/${id}`)
    .then((response) => {
      customer = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return customer;
}

export async function SaveCustomer({
  onSuccess,
  onError,
  data,
}: ServiceTypes<Customer>) {
  let customer = undefined;
  let customerSave = axiosInstance.post;

  if (data?.id) {
    customerSave = axiosInstance.put;
  }

  await customerSave("/customer", data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  })
    .then((resp) => {
      customer = resp.data;
      onSuccess?.(resp);
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return customer;
}

// export async function DeleteCustomer({
//   id,
//   onError,
//   onSuccess,
// }: CustomerServiceProps) {
//   let customer = undefined;
//   axiosInstance
//     .delete(`/customer/${id}`)
//     .then((resp) => {
//       customer = resp.data;
//       onSuccess?.(resp);
//     })
//     .catch((resp) => {
//       console.log(err);
//       onError?.(err);
//     });
//   return customer;
// }
