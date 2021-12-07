import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GetCustomer } from "../service/customerService";
import { Customer } from "../types/customer";

export interface CustomerContextTiping {
  setCustomer: React.Dispatch<React.SetStateAction<Customer | undefined>>;
  customer?: Customer;
}

export const CustomerContext = React.createContext<CustomerContextTiping>({
  setCustomer: () => {
    console.log("no setCustomer");
  },
});

export const CustomerProvider = (props: any) => {
  const [customer, setCustomer] = useState<Customer>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("customer_id");

    if (token !== null && id !== null) {
      GetCustomer({ id, token }).then((resp) => {
        setCustomer(resp);
      });
      return;
    }

    setCustomer(undefined);
  }, []);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {props?.children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => React.useContext(CustomerContext);
