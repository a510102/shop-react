import { createContext } from 'react';

export const ShopContext = createContext({
  carts: [],
  products: [],
});
