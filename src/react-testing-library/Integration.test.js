import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import React from 'react';
import Integration from './Integration';
describe('integration tests', () => {
	afterEach(cleanup);

	it('should contains name', () => {
		const { getByText } = render(<Integration name="juicy fruit" />);
		getByText('juicy fruit');
	});

	it('should uppercase name on click', () => {
		const { getByText } = render(<Integration name="juicy fruit" />);
		const el = getByText('juicy fruit');
		fireEvent.click(el);
		waitForElement(() => getByText('JUICY FRUIT'));
	});
});