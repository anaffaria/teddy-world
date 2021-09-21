import { Customer } from "../types/customer";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetCustomer({
  onSuccess,
  id,
  onError,
  token,
}: ServiceTypes<Customer>) {
  let customer = undefined;
  await axiosInstance
    .get(`customer/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      customer = response.data;
      onSuccess?.(response);
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
  token
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
      Authorization: `Bearer ${token}`
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

export async function UpdatePassword({
  onSuccess,
  onError,
  data,
  token,
}: ServiceTypes<Customer>) {
  let customer = undefined;
  axiosInstance
    .patch("/customer", data, {
      headers: {
        Authorizarion: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      if (resp.data?.hasError) throw new Error(resp.data?.message);
      onSuccess?.(resp);
      customer = resp.data;
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return customer;
}
