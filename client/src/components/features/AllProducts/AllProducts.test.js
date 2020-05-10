import React from 'react';
import { shallow } from 'enzyme';
import { AllProductsComponent } from './AllProducts';

describe('Component Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<AllProductsComponent />);
    expect(component).toBeTruthy();
  });
});
