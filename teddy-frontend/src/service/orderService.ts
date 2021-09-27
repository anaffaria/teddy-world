import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetOrders({
  onSuccess,
  id,
  onError,
}: ServiceTypes<any>) {
  let orders: any | undefined;
  await axiosInstance
    .get(`/admin/orders`)
    .then((response) => {
      orders = response.data;
      onSuccess?.(response);
    })
    .catch((err) => {
      console.error(err);
      onError?.(err);
    });
  return orders;
}

export async function UpdateOrder({
  onSuccess,
  onError,
  data,
  token,
}: ServiceTypes<any>) {
  let coupon = undefined;
  await axiosInstance
  .patch(`/admin/orders`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    coupon = response.data;
    onSuccess?.(response);
  })
  .catch((err) => {
    console.error(err);
    onError?.(err);
  });
return coupon;

  return coupon;
}