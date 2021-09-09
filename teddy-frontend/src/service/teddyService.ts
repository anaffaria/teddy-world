
import { Teddy } from "../Types/Teddy";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetTeddy({
  onSuccess,
  id,
  onError,
}: ServiceTypes<Teddy>) {
  let teddy = undefined;
  await axiosInstance
    .get(`teddy/${id}`)
    .then((response) => {
      teddy = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return teddy;
}

export async function ListTeddy({
  onSuccess,
  onError,
}: ServiceTypes<Teddy>) {
  let teddys = undefined;
  await axiosInstance
    .get(`/teddy`)
    .then((response) => {
      teddys = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return teddys;
}

export async function SaveTeddy({
  onSuccess,
  onError,
  data,
}: ServiceTypes<Teddy>) {
  let teddy = undefined;
  let teddySave = axiosInstance.post;

  if (data?.id) {
    teddySave = axiosInstance.put;
  }

  await teddySave("/teddy", data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  })
    .then((resp) => {
      teddy = resp.data;
      onSuccess?.(resp);
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return teddy;
}

export async function UpdateTeddy({
  onSuccess,
  onError,
  data,
}: ServiceTypes<Teddy>) {
  let teddy = undefined;
  axiosInstance
    .patch("/teddy", data)
    .then((resp) => {
      if (resp.data?.hasError) throw new Error(resp.data?.message);
      onSuccess?.(resp);
      teddy = resp.data;
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return teddy;
}
