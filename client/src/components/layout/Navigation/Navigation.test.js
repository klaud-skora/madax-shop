import React from 'react';
import { shallow } from 'enzyme';
import { NavigationComponent } from './Navigation';

describe('Component Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<NavigationComponent />);
    expect(component).toBeTruthy();
  });
});
