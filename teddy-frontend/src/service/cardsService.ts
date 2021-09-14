import { CreditCard } from "../types/card";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";


export async function GetCreditCard({
  onSuccess,
  id,
  onError,
}: ServiceTypes<CreditCard>) {
  let creditCard = undefined;
  await axiosInstance
    .get(`creditcard/${id}`)
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
}: ServiceTypes<CreditCard>) {
  let creditCard = undefined;
  await axiosInstance
    .get(`creditcards`)
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
}: ServiceTypes<CreditCard>) {
  let creditCard = undefined;
  let SaveCreditCard = axiosInstance.post;

  await SaveCreditCard("/creditcard", data)
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

