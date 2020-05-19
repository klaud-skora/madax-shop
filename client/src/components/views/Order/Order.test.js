import React from 'react';
import { shallow } from 'enzyme';
import { OrderComponent } from './Order';

const mockData = {
  cart: [
    {
      _id: 0,
      name: 'Product',
      price: 0,
      image: 'imagePath',
      amount: 1,
    },
  ],
  changeAmount: () => console.log('changeAmount'),
  deleteProduct: () => console.log('deleteProduct'),
};


describe('Component Order', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
