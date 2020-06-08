import React from 'react';
import { shallow } from 'enzyme';
import { OrderFormComponent } from './OrderForm';

const mockData = {
  products: [
    {
      _id: 0,
      name: 'Product',
      price: 0,
      image: 'imagePath',
      amount: 1,
    },
  ],
  submitOrder: () => console.log('func'),
  cleanCart: () => console.log('func'),
};

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderFormComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
