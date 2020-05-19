import React from 'react';
import { shallow } from 'enzyme';
import { NavigationComponent } from './Navigation';

const mockData = {
  cart: [],
};

describe('Component Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<NavigationComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
