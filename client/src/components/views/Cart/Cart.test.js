import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

const mockData = {
  productsInCart: [
    {
      id: 0,
      name: 'Product',
      price: 0,
      image: 'imagePath',
    },
  ],
  loadCart: () => console.log('func'),
};

describe('Component Order', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
