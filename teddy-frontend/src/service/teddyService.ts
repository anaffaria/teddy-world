import { Teddy } from "../Types/Teddy";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetTeddy({
  onSuccess,
  id,
  onError,
}: ServiceTypes<Teddy>) {
  let teddy: Teddy | undefined;
  await axiosInstance
    .get(`/teddy/${id}`)
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

export async function ListTeddy({ onSuccess, onError }: ServiceTypes<Teddy>) {
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
  token,
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
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      teddy = resp.data;
      if (resp.data?.hasError) throw new Error(resp.data?.message);
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
  token,
}: ServiceTypes<Teddy>) {
  let teddy = undefined;
  axiosInstance
    .patch("/teddy", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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

export async function DeleteTeddy({
  onSuccess,
  onError,
  data,
  token,
  id,
}: ServiceTypes<Teddy>) {
  axiosInstance
    .delete(`/teddy/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      if (resp.data.hasError) throw new Error();
      onSuccess?.();
    })
    .catch((err) => {
      console.log(err);
      onError?.();
    });
}
