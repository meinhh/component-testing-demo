import { shallow } from 'enzyme';
import React from 'react';
import Shallow from './Shallow';
import InnerComponent from '../InnerComponent';
import jest from 'jest-mock';

describe('shallow tests', () => {
	it('fake renders three inner components', () => {
		const wrapper = shallow(<Shallow />);
		expect(wrapper.find(InnerComponent)).toHaveLength(3);
	});

	it('doesn\'t actually render inner components', () => {
		const wrapper = shallow(<Shallow />);
		expect(wrapper.find('.inner-comp')).toHaveLength(0);
	});

	it('renders the title', () => {
		const wrapper = shallow(<Shallow />);
		expect(wrapper.find('.title').text()).toEqual('hi');
	});

	it('renders children when passed in', () => {
		const wrapper = shallow((
			<Shallow>
				<div className="unique" />
			</Shallow>
		));
		expect(wrapper.contains(<div className="unique" />)).toEqual(true);
	});

	it('simulates click events', () => {
		const onButtonClickMock = jest.fn();
		const wrapper = shallow(<Shallow onButtonClick={onButtonClickMock} />);
		wrapper.find('button').simulate('click');
		expect(onButtonClickMock.mock.calls).toHaveLength(1);
	});
});