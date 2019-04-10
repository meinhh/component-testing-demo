import React, { Component } from 'react';
import InnerComponent from '../InnerComponent';

export default class Mount extends Component {
	render() {
		return (
			<div>
				<h1 className="title">{this.props.title}</h1>
				<InnerComponent />
			</div>
		);
	}
}