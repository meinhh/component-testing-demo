import React, { Component } from 'react';
import InnerComponent from '../InnerComponent';

export default class Snapshot extends Component {
	constructor(props) {
		super(props);

		this.handleClick = () => { };
	}
	render() {
		return (
			<div>
				<h1 className="title">{this.props.title}</h1>
				<InnerComponent />
				<button onClick={this.handleClick}>CLICK ME</button>
			</div>
		);
	}
}