export const initialState = {
  products: {
    data: [],
    loading: {
      active: true,
      error: false,
    },
  },
  cart: {
    products: [],
  },
  searchString: '',
  product: {},
};
