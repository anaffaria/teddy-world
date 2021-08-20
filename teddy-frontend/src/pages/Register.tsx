import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import RegisterComponent, { Customer } from "../components/Register/Register";
import { axiosInstance } from "../service/serviceInstance";

function Register() {
  return (
    <>
      <RegisterComponent />
    </>
  );
}

export default Register;
