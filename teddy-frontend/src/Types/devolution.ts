import { Order } from "./order";

export interface Devolution {
  id?: number;
  createdAt?: string;
  statusDevolution?: string;
  order?: Order;
  reason?: string;
}
