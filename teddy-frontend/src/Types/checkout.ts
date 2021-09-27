
import { Coupon } from "./coupon";
import { Address, Customer } from "./customer";

export interface CheckoutType {
  id?: number;
  total?: number;
  shippingTax?: number;
  customer?: Customer;
  status?: number;
  addressList?: Array<Address>;
  paymentMethodList?: Array<PaymentMethod>;
  coupon?: Coupon;
}

export interface PaymentMethod {
  paymentValue?: number;
  creditCard?: {
    id: string
  };
}
