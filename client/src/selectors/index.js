/* products selectors */
export const getCartProducts = ({ cart }) => cart.products;

/* cart selectors */
export const getAll = ({ products }) => products.data;
export const getProductById = ({ products }, id) => {
  const filteredProducts = products.data.filter(product => product._id === id);
  return filteredProducts.length ? filteredProducts[0] : {error: true};
};

/* searchString selectors */
export const getSearchString = ({searchString}) => searchString;
