import { mount } from 'enzyme';
import React from 'react';
import Mount from './Mount';

describe('mount tests', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<Mount title="wow" />);
		expect(wrapper.props().title).toEqual('wow');
		wrapper.setProps({ title: 'fml' });
		expect(wrapper.find('.title').text()).toEqual('fml');
	});

	it('renders inner component', () => {
		const wrapper = mount(<Mount title="wow" />);
		expect(wrapper.find('.inner-comp').text()).toEqual('i do nothing');
	});
});