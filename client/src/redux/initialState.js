export const initialState = {
  products: {
    data: [
      {
        id: 1,
        name: 'Buty robocze urgent',
        price: 180,
        image: '../images/photo1111.jpg',
      },
      {
        id: 2,
        name: 'Czapka LED czarna',
        price: 40,
        image: '../images/photo1112.jpg',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
