import { Address } from "../types/customer";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetAddress({
  onSuccess,
  id,
  onError,
}: ServiceTypes<Address>) {
  return null;
}

export async function SaveAddress({
  onSuccess,
  onError,
  data,
  token,
}: ServiceTypes<Address>) {
  let address = undefined;
  let saveAddress = axiosInstance.post;

  if (data?.id) {
    saveAddress = axiosInstance.put;
  }

  await saveAddress("/address", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      if (resp.data?.hasError) throw new Error(resp.data?.message);
      onSuccess?.(resp);
      address = resp.data;
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return address;
}

export async function DeleteAddress({
  onSuccess,
  onError,
  token,
  id
}: ServiceTypes<Address>) {
  axiosInstance
    .delete(`/address/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((resp) => {
      if (resp.data.hasError) throw new Error(resp.data?.message);
      onSuccess?.()
    })
    .catch((err) => {
      console.log(err);
      onError?.()
    });
}
