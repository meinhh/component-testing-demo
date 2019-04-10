import React, { Component } from 'react';
import InnerComponent from '../InnerComponent';

export default class Integration extends Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.name };
	}

	upperCase() {
		setTimeout(() =>
			this.setState({ name: this.props.name.toUpperCase() })
			, 100);
	}
	render() {
		return (
			<div>
				<InnerComponent />
				<div onClick={this.upperCase.bind(this)}>
					{this.state.name}
				</div>
			</div>
		);
	}
}