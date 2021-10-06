import { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router";
import Swal from "sweetalert2";
import { GetAuthAdmin } from "../../../service/adminService";
import { GetCustomer } from "../../../service/customerService";

export interface AuthAdminProps {
  Component: () => JSX.Element;
  path: string;
}

export const AuthAdmin: React.FC<AuthAdminProps> = ({ Component, path }) => {
  const token = localStorage.getItem("token") || "";
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: "Aguarde um momento",
      html: "<p>Carregando informações.</p><img width=150 height=150 src='https://i.pinimg.com/originals/2f/74/25/2f742539b8b1ad66d11d56600b27c8c3.gif'></img>",
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    const onSuccess = (response: any) => {
      setIsAuthenticated(true);
      Swal.close();
    };

    const onError = (err: any) => {
      Swal.fire({
        icon: "warning",
        title: "Verifique suas permissões",
      });
      history.push("/login");
    };

    GetAuthAdmin({ token, onSuccess, onError });
  }, [setIsAuthenticated, token, history]);

  return isAuthenticated ? <Route component={Component} path={path} /> : <></>;
};
