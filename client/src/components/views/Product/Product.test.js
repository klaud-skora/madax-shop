import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const mockData = {
  product:
    {
      name: 'Product',
      price: 0,
      image: 'imagePath',
    },
};

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent {...mockData}/>);
    expect(component).toBeTruthy();
  });
});
