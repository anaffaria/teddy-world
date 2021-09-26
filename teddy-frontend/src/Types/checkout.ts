import { Address } from "cluster";
import { CreditCard } from "./card";
import { Customer } from "./customer";

export interface Checkout {
  id?: number;
  total: number;
  shippingTax: number;
  customer?: Customer;
  status: number;
  addressList?: Array<Address>;
  paymentMethodList?: Array<PaymentMethod>;
}

export interface PaymentMethod {
  paymentValue: number;
  creditCard: CreditCard;
}
