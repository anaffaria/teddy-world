import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Customer } from "../components/CustomerAccount/CustomerAccount";

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
    const customerStorage = localStorage.getItem("customer");

    if (customerStorage) {
      setCustomer(JSON.parse(customerStorage));
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
