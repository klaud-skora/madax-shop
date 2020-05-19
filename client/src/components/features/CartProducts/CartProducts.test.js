import React from 'react';
import { shallow } from 'enzyme';
import { CartProductsComponent } from './CartProducts';

const mockData = {
  products: [
    {
      id: 0,
      name: 'Product',
      price: 0,
      image: 'imagePath',
      amount: 1,
    },
  ],
  changeAmount: () => console.log('func'),
  deleteProduct: () => console.log('func'),
};

describe('Component CartProducts', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartProductsComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
