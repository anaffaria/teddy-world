import { axiosInstance } from "./serviceInstance";

export interface LoginProps {
  username: string;
  password: string;
  onSuccess?: Function;
  onError?: Function;
}

export async function Authenticate({
  username,
  password,
  onSuccess,
  onError,
}: LoginProps) {
  await axiosInstance
    .post(`/authenticate`, { username, password })
    .then((response) => {
      localStorage.setItem("token", response.data?.jwtResponse?.token)
      localStorage.setItem("customer_id", response.data?.id)
      onSuccess?.(response.data);
    })
    .catch((err: Error) => {
      console.log(err)
      onError?.();
    });
}
