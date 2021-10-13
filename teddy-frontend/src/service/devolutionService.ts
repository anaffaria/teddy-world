import { axiosInstance } from "./serviceInstance";
import { ServiceTypes } from "./serviceTypes";

export async function SendDevolutionRequest({
  onSuccess,
  onError,
  data,
  token,
  id
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
