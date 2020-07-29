import React from 'react';
import { produce } from "immer";
import {
  UPDATE_CART,
  UPDATE_PRICE,
  CHANGE_CATEGORY,
  UPDATE_PRODUCT,
  LOG_OUT,
  LOGO_IN,
} from './actiontype'


function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
};

const cartReducer = (carts, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return carts = action.cart;
    case UPDATE_PRICE:
      return {
        ...carts,
        final_total: action.price
      };
    default:
      return carts;
  }
};

const productReducer = (products, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return products = action.product;
    case CHANGE_CATEGORY:
      return products.filter(product => product.category === action.category);
    default:
      return products;
  }
};

const userReducer = (user, action) => {
  switch (action.type) {
    case LOGO_IN:
      return { ...user, auth: true };
    case LOG_OUT:
      return { ...user, auth: false };
    default:
      return user;
  }
}

export { useImmerReducer, cartReducer, productReducer, userReducer };