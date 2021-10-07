import { Category } from "../Types/Teddy";
import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function ListCategory({
  onSuccess,
  onError,
}: ServiceTypes<Category>) {
  let categories = undefined;
  await axiosInstance
    .get(`/category`)
    .then((response) => {
      categories = response.data;
      onSuccess?.();
    })
    .catch((err) => {
      console.error(err);
      onError?.();
    });
  return categories;
}