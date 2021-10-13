import { Customer } from "./customer";
import { Teddy } from "./Teddy";

export interface Order {
  id: number;
  createdAt: string;
  deliveryDate: string;
  total: number;
  shippingTax: number;
  customer: Customer;
  status: string;
  itemList: [
    {
      id: number;
      createdAt: string;
      teddy: Teddy;
      amount: number;
    }
  ];
  devolution?: null;
}
