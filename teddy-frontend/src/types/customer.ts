export interface Customer {
  id?: number;
  createdAt?: string;
  deletedAt?: string;
  fullName?: string;
  birthDate?: string;
  email?: string;
  cpf?: string;
  telNumber?: string;
  gender?: number;
  addressList?: Array<Address>;
  cart?: {
    itemDTOS: Array<{
      teddyItemDTO: {
        id?: string;
        image?: string;
        title?: string;
        subtile?: string;
        priceReal?: number;
        priceFactory?: number;
        size?: string;
        amountAvailable?: number;
      };
      amount: number;
      id?: number;
    }>;
  };
}

export interface Address {
  id?: string;
  postalCode: string;
  street: string;
  complement: string;
  number: string;
  state: string;
  city: string;
  neighborhood: string;
  country: string;
  addressType: AddressType;
  customer: {
    id: number;
  };
}

export enum AddressType {
  BILLING = 0,
  DELIVERY = 1,
}
