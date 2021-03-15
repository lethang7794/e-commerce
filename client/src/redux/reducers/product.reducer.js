import * as types from '../constants/product.constants';

const initialState = {
  products: [],
  totalPageNum: 1,
  selectedProduct: null,
  loading: false,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /************************************** REQUEST **************************************/
    case types.GET_ALL_PRODUCTS_REQUEST:
    case types.GET_ONE_PRODUCT_REQUEST:
    case types.CREATE_PRODUCT_REQUEST:
    case types.UPDATE_PRODUCT_REQUEST:
    case types.DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    /************************************** SUCCESS **************************************/
    case types.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
        totalPageNum: payload.totalPages,
        loading: false,
      };

    case types.GET_ONE_PRODUCT_SUCCESS:
      return { ...state, selectedProduct: payload, loading: false };

    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProduct: payload,
        loading: false,
      };

    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedProduct: {},
      };

    /************************************** FAILURE **************************************/
    case types.GET_ALL_PRODUCTS_FAILURE:
    case types.GET_ONE_PRODUCT_FAILURE:
    case types.CREATE_PRODUCT_FAILURE:
    case types.UPDATE_PRODUCT_FAILURE:
    case types.DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false };

    /************************************** DEFAULT **************************************/
    default:
      return state;
  }
};

export default productReducer;
