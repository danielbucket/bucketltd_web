import React, { Component } from 'react';
import Login from './login/Login';
import './ChatterBoxApp.css';

export default class ChatterBoxApp extends Component {
	constructor() {
		super()
		this.state = {
			user_name: "name",
			user_email: "email",
			user_password: "password",
			loginStatus: false
		},
		this.onChange = this.onChange.bind(this)
	}

	onChange(val,type) {
		this.setState({
			[type]: val
		})
	}

	onSubmit() {
		console.log('submit state: ')
	}


	render() {
		return (
			<div className="chatter-box-app-body">
				ChatterBoxApp
				<Login userState={ this.state }
											onChange={this.onChange}
											onSubmit={this.onSubmit}
											/>
			</div>
			)
	}
}