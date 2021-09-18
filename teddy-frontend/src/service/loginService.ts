import { AxiosError } from "axios";
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
      console.log()
      sessionStorage.setItem("token", response.data?.jwtResponse?.token)
      
      onSuccess?.(response.data);
    })
    .catch((err: Error) => {
      onError?.();
    });
}
