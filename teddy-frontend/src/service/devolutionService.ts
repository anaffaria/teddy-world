import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function SendDevolutionRequest({
  onSuccess,
  onError,
  data,
  token,
  id,
}: ServiceTypes<any>) {
  await axiosInstance
    .post(`/customer/${id}/devolution`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      onSuccess?.(response);
    })
    .catch((err) => {
      console.error(err);
      onError?.(err);
    });
}

export async function ListDevolutionRequest({
  onSuccess,
  onError,
  token,
}: ServiceTypes<any>) {
  axiosInstance
    .get("/admin/devolutions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      onSuccess?.(response);
    })
    .catch((err) => {
      onError?.();
      console.error(err);
    });
}

export async function GetDevolutionRequest({
  onSuccess,
  onError,
  token,
  id,
}: ServiceTypes<any>) {
  axiosInstance
    .get(`/admin/devolutions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      onSuccess?.(response);
    })
    .catch((err) => {
      onError?.();
      console.error(err);
    });
}
