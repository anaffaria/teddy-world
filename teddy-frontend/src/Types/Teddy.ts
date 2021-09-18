export interface Teddy {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  priceReal: number;
  priceFactory: number;
  color: Array<Color>;
  category: Array<Category>;
  size: Size;
  amount: number;
  amountAvailable: number;
}

export interface Color {
  id?: number;
  name?: string;
}

export interface Category {
  id?: number;
  name?: string;
}

export enum Size {
  oneSize = <any>"0cm a 20cm",
  twoSize = <any>"21cm a 40cm",
  treeSize = <any>"41cm a 60cm",
  fourSize = <any>"61cm a 90cm",
  fiveSize = <any>"91cm a 2metros",
}
