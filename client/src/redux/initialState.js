export const initialState = {
  products: {
    data: [],
    loading: {
      active: true,
      error: false,
    },
  },
  cart: {
    products: [
      {
        _id: 234,
        orderer: {
          firstName: 'Bogdan',
        },
      },
    ],
  },
};
