import { Customer } from "../components/CustomerAccount/CustomerAccount";
import { axiosInstance } from "./serviceInstance";

export interface CustomerServiceProps {
  onSuccess?: Function;
  onError?: Function;
  id?: string;
  data?: Customer;
}

export async function GetCustomer({
  onSuccess,
  id,
  onError,
}: CustomerServiceProps) {
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
}: CustomerServiceProps) {
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
