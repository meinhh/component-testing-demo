import React from 'react';
import Snapshot from './Snapshot';
import renderer from 'react-test-renderer';

describe('snapshot tests', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<Snapshot page="http://www.facebook.com">Facebook</Snapshot>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders as an anchor when no page is set', () => {
		const tree = renderer.create(<Snapshot>Facebook</Snapshot>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('properly escapes quotes', () => {
		const tree = renderer
			.create(<Snapshot>{"\"Facebook\" \\'is \\ 'awesome'"}</Snapshot>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('changes the class when hovered', () => {
		const component = renderer.create(
			<Snapshot page="http://www.facebook.com">Facebook</Snapshot>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();

		tree.props.onMouseEnter();
		tree = component.toJSON();
		expect(tree).toMatchSnapshot();

		tree.props.onMouseLeave();
		tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});