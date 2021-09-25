import { Coupon } from "../Types/coupon";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetCoupon({
  onSuccess,
  id,
  onError,
}: ServiceTypes<Coupon>) {
  let coupon: Coupon | undefined;
  await axiosInstance
    .get(`/admin/coupon/${id}`)
    .then((response) => {
      coupon = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return coupon;
}

export async function SaveCoupon({
  onSuccess,
  onError,
  data,
  token,
}: ServiceTypes<Coupon>) {
  let coupon = undefined;
  let SaveCoupon = axiosInstance.post;

  await SaveCoupon("/admin/cupons", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      if (resp.data?.hasError) throw new Error(resp.data?.message);
      onSuccess?.(resp);
      coupon = resp.data;
    })
    .catch((err) => {
      console.log(err);
      onError?.(err);
    });

  return coupon;
}

export async function ListCoupon({ onSuccess, onError, token }: ServiceTypes<Coupon>) {
  let coupons = undefined;
  await axiosInstance
    .get(`/admin/cupons`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      coupons = response.data;
      onSuccess?.(response);
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return coupons;
}