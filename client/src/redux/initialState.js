export const initialState = {
  products: {
    data: [
      {
        id: 1,
        name: 'Buty robocze',
        price: 180,
        image: '../../images/photo1111.jpg',
      },
      {
        id: 2,
        name: 'Czapka LED',
        price: 40,
        image: '../../images/photo1112.jpg',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
