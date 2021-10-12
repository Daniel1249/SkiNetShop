import { v4 as uuidv4 } from 'uuid';
export interface IBasket {
  id: string;
  items: IBasketItem[];
}

export interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

// we need a to create a class to create an new basket with uniq ID
// we wil use a package for this: npm install uuid      //similar with guid
export class Basket implements IBasket {
  // id: string;
  id = uuidv4();
  items: IBasketItem[] = [ ];
}

export interface IBasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
