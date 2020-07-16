import React from 'react'
import { produce } from "immer";
import { UPDATE_CART, UPDATE_PRICE } from './actiontype'


export function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

export const cartReducer = (carts, action) => {
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
}