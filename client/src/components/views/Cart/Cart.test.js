import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

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
};

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartComponent {...mockData}/>);
    expect(component).toBeTruthy();
  });
});
