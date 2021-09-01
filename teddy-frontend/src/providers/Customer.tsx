import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const CustomerContext = React.createContext({});

export const CustomerProvider = (props: any) => {
  const [customer, setCustomer] = useState();

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

export const useCustomer = () => React.useContext<any>(CustomerContext);
