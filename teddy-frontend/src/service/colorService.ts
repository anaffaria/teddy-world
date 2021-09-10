import { Color } from "react-bootstrap/esm/types";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function ListColor({
  onSuccess,
  onError,
}: ServiceTypes<Color>) {
  let colors = undefined;
  await axiosInstance
    .get(`/color`)
    .then((response) => {
      colors = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return colors;
}