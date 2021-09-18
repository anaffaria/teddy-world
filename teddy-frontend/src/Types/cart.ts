import { Teddy } from "./Teddy";

export interface Cart {
  items: Array<Item>
}

export interface Item {
  teddy: Teddy,
  amount: number,
}