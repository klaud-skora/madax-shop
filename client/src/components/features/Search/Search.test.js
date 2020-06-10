import React from 'react';
import { shallow } from 'enzyme';
import { SearchComponent } from './Search';

describe('Component Search', () => {
  it('should render without crashing', () => {
    const component = shallow(<SearchComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
