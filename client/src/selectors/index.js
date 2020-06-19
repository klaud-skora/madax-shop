/* products selectors */
export const getAll = ({ products }) => products.data;
export const getProductById = ({ products }, id) => {
  const filteredProducts = products.data.filter(product => product._id === id);
  return filteredProducts.length ? filteredProducts[0] : {error: true};
};
export const getChosedProduct = ({ product }) => product;

/* cart selectors */
export const getCartProducts = ({ cart }) => cart.products;

/* searchString selectors */
export const getSearchString = ({searchString}) => searchString;
