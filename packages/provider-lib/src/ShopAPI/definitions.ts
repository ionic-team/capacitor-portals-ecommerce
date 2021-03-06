export interface UserPicture {
  picture: string;
}

export interface ShopAPIPlugin {
  getCart(): Promise<Cart>;
  getUserDetails(): Promise<User>;
  updateUserDetails(user: User): Promise<void>;
  checkoutResult(result: CheckoutResult): Promise<void>;
  getUserPicture(): Promise<UserPicture>;
  setUserPicture(picture: UserPicture): Promise<void>;
}

export type Categories = 'MustHaves' | 'Featured' | 'Sale' | 'Recommended';

export interface CheckoutResult {
  result: 'success' | 'cancel' | 'failure';
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: Categories;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  addresses: Address[];
  creditCards: CreditCard[];
}

export interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  postal: string;
  preferred?: boolean;
}

export interface CreditCard {
  id: number;
  company: 'Visa';
  number: string;
  cvv: string;
  zip: string;
  expirationDate: string;
  preferred?: boolean;
}

export interface Cart {
  id: number;
  subTotal: number;
  basket: {
    productId: number;
    quantity: number;
  }[];
}

export interface PurchaseOrder {
  cartId: number;
  userId: number;
  addressId: number;
  creditCardId: number;
  purchaseDate: string;
}

export interface Data {
  products: Product[];
  user: User;
}