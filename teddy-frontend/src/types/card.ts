export interface CreditCard {
  id?: string;
  createdAt?: string;
  deletedAt?: string;
  cardHolder?: string;
  creditCardNumber?: string;
  cardMonth?: string;
  cardYear?: string;
  cardSecurity?: string;
  cardFavourite?: boolean;
  cardFlag?: string;
  customer?: {
    id: number;
  };
  toggleModal?: Function;
  handleCards?: Function;
}