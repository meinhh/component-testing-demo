import React from 'react';
import renderer from 'react-test-renderer';
import Snapshot from './Snapshot';

it('renders correctly', () => {
	const tree = renderer
		.create(<Snapshot title="this is a title" />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});