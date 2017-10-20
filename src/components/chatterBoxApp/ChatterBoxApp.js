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
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	};

	onChange(val,type) {
		this.setState({
			[type]: val
		})
	};

	onSubmit() {
		fetch('/chatterbox/login', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				user_name: this.state.user_name,
				user_email: this.state.user_email,
				user_password: this.state.user_password
			})
		})
		.then(res => res.json())
		.then(data => console.log("Data Schmata: ", data ))
		.catch(error => console.log(`Error: ${ error }`))
	};


	render() {
		return (
			<div className="chatter-box-app-body">
				ChatterBoxApp
				<Login userState={this.state}
											onChange={this.onChange}
											onSubmit={this.onSubmit}
											/>
			</div>
			)
	}
};