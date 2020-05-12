export const initialState = {
  products: [
    {
      id: 1,
      name: 'Buty robocze',
      price: 180,
      image: 'photo1111.jpg',
    },
    {
      id: 2,
      name: 'Czapka LED',
      price: 40,
      image: 'photo1112.jpg',
    },
  ],
  loading: {
    active: false,
    error: false,
  },
};
