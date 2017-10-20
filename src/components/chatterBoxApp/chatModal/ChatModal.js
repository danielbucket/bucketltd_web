import React, { Component } from 'react';

export default class ChatModal extends Component {
constructor() {
	super()
	this.state = {
		user_name: '',
		user_email: ''
	}
}

componentDidMount() {
	this.setState({
		user_name: this.props.userData.user_name,
		user_email: this.props.userData.user_email
	})
}

	render() {
		return(
			<div>
				Welcome {this.state.user_name}
			</div>
		)
	}
}