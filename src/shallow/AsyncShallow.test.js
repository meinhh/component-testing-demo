import React from 'react';
import { shallow } from 'enzyme';
import AsyncShallow from './AsyncShallow';

describe('async shallow tests', () => {
	it('should show name', async () => {
		window.fetch = jest.fn().mockImplementation(() => ({
			status: 200,
			json: () => new Promise((resolve) =>
				resolve({
					name: 'picanha'
				}))
		}));

		const renderedComponent = await shallow(<AsyncShallow />);
		await renderedComponent.update();
		expect(renderedComponent.find('.name').text()).toEqual('picanha');
	})

	it('should show error', async () => {
		window.fetch = jest.fn().mockImplementation(() => ({
			status: 500,
		}));

		const renderedComponent = await shallow(<AsyncShallow />);
		await renderedComponent.update();
		expect(renderedComponent.find('.error').text()).toEqual('Error fetching name');
	})
})