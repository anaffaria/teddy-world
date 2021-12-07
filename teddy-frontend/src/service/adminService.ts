import { AxiosError } from "axios";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function GetAuthAdmin({
  onSuccess,
  onError,
  token,
}: ServiceTypes<any>) {
  await axiosInstance
    .get(`admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      onSuccess?.(response);
    })
    .catch((err: AxiosError) => {
      console.error(err);
      onError?.(err);
    });
}