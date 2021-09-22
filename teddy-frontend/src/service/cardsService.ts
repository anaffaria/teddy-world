import { CreditCard } from "../types/card";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetCreditCard({
  onSuccess,
  id,
  onError,
  token,
}: ServiceTypes<CreditCard>) {
  let creditCard = undefined;
  await axiosInstance
    .get(`creditcard/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      creditCard = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return creditCard;
}

export async function GetAllCreditCard({
  onSuccess,
  id,
  onError,
  token,
}: ServiceTypes<CreditCard>) {
  let creditCard = undefined;
  await axiosInstance
    .get(`creditcards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      creditCard = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return creditCard;
}

export async function SaveCreditCard({
  onSuccess,
  onError,
  data,
  token,
}: ServiceTypes<CreditCard>) {
  let creditCard = undefined;
  let SaveCreditCard = axiosInstance.post;

  await SaveCreditCard("/creditcard", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      if (resp.data?.hasError) throw new Error(resp.data?.message);
      onSuccess?.(resp);
      creditCard = resp.data;
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return creditCard;
}

export async function GetCreditCardByUser({
  onSuccess,
  onError,
  data,
  token,
  id,
}: ServiceTypes<CreditCard>) {
  axiosInstance
    .get(`creditcards/customer/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      onSuccess?.(resp);
    })
    .catch((err) => {
      onError?.();
      console.log(err);
    });
}

export async function DeleteCard({
  onSuccess,
  onError,
  data,
  token,
  id,
}: ServiceTypes<CreditCard>) {
  axiosInstance
  .delete(`/creditcard/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((resp: any) => {
    onSuccess?.(resp)
  })
  .catch((err: any) => {
    onError?.()
    console.log(err);
  });
}