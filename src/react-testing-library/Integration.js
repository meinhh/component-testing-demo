import React, { Component } from 'react';

export default class Integration extends Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.name };
	}

	upperCase() {
		this.setState({ name: this.props.name.toUpperCase() });
	}
	render() {
		return (
			<div onClick={this.upperCase.bind(this)}>
				{this.state.name}
			</div>
		);
	}
}