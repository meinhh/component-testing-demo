import { shallow } from 'enzyme';
import React from 'react';
import Unit from './Unit';
import InnerComponent from './InnerComponent';
import jest from 'jest-mock';

describe('unit tests', () => {
	it('renders three inner components', () => {
		const wrapper = shallow(<Unit />);
		expect(wrapper.find(InnerComponent)).toHaveLength(3);
	});

	it('renders the title', () => {
		const wrapper = shallow(<Unit />);
		expect(wrapper.find('.title').text()).toEqual('hi');
	});

	it('renders children when passed in', () => {
		const wrapper = shallow((
			<Unit>
				<div className="unique" />
			</Unit>
		));
		expect(wrapper.contains(<div className="unique" />)).toEqual(true);
	});

	it('simulates click events', () => {
		const onButtonClickMock = jest.fn();
		const wrapper = shallow(<Unit onButtonClick={onButtonClickMock} />);
		wrapper.find('button').simulate('click');
		expect(onButtonClickMock.mock.calls).toHaveLength(1);
	});
});