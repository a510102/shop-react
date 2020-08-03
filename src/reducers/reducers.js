import {
  UPDATE_CART,
  UPDATE_PRICE,
  UPDATE_PRODUCT,
  LOG_OUT,
  LOGO_IN,
} from './actiontype'

const initialState = {
  carts: {},
  products: [],
  auth: false
}

const cartstReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return { ...state, carts: { ...action.cart } };
    case UPDATE_PRICE:
      return {
        ...state,
        carts: {
          ...state.carts,
          final_total: action.price
        }
      };
    default:
      return state;
  }
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return { ...state, products: [...action.product] };
    default:
      return state;
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGO_IN:
      return { ...state, auth: true };
    case LOG_OUT:
      return { ...state, auth: false };
    default:
      return state;
  }
}

export { userReducer, cartstReducer, productsReducer };