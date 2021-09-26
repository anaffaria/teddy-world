import { Checkout } from "../Types/checkout";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function FinishCheckout({
  onSuccess,
  onError,
  data,
  id,
  token
}: ServiceTypes<Checkout>) {
  let checkout = undefined;
  axiosInstance
    .post(`/customer/${id}/cart/order`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((resp) => {
      if (resp.data?.hasError) throw new Error(resp.data?.message);
      onSuccess?.(resp);
      checkout = resp.data;
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return checkout;
}