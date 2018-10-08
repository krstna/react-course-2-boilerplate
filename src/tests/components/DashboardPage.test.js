import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import { shallow } from 'enzyme';

test('should render Dashboard', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});