export interface Cart {
  items: Array<Item>
}

export interface Item {
  teddy: {
    id: string
  },
  amount: number,
}