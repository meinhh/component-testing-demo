import React, { Component } from 'react';
import InnerComponent from '../InnerComponent';

export default class Mount extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.props.onButtonClick
			? this.props.onButtonClick.bind(this)
			: () => { };
	}
	render() {
		return (
			<div>
				<h1 className="title">{this.props.title}</h1>
				<InnerComponent />
			</div>
		);
	}
}