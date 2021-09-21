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
      sessionStorage.setItem("token", response.data?.jwtResponse?.token)      
      onSuccess?.(response.data);
    })
    .catch((err: Error) => {
      console.log(err)
      onError?.();
    });
}
