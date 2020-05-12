import React from 'react';
import { shallow } from 'enzyme';
import { AllProductsComponent } from './AllProducts';

const mockData = {
  products: [
    {
      id: 0,
      name: 'Product',
      price: 0,
      image: 'imagePath',
    },
  ],
};

describe('Component Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<AllProductsComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
