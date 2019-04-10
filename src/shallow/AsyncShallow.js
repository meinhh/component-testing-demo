import React, { Component } from 'react';

export default class AsyncShallow extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			errorStatus: ''
		}
	}

	async componentDidMount() {
		const response = await fetch('/api/name')
		if (response.status >= 400) {
			this.setState({ errorStatus: 'Error fetching name' });
		} else {
			response.json().then(data => {
				this.setState({ name: data.name })
			});
		}
	}

	render() {
		return (
			<div>
				{this.state.errorStatus && <p className="error">{this.state.errorStatus}</p>}
				{this.state.name && <div className="name">{this.state.name}</div>}
			</div>
		);
	}
}