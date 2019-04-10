import React, { Component } from 'react';
import InnerComponent from '../InnerComponent';

export default class Shallow extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.props.onButtonClick
			? this.props.onButtonClick.bind(this)
			: () => { };
	}
	render() {
		return (
			<div>
				<h1 className="title">hi</h1>
				<InnerComponent />
				<InnerComponent />
				<InnerComponent />
				<div>{this.props.children}</div>
				<button onClick={this.handleClick}>CLICK ME</button>
			</div>
		);
	}
}