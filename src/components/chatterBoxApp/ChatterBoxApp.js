import React, { Component } from 'react';
import Login from './login/Login';
import ChatModal from './chatModal/ChatModal';
import './ChatterBoxApp.css';

export default class ChatterBoxApp extends Component {
	constructor() {
		super()
		this.state = {
			user_name: "",
			user_email: "",
			loginStatus: false
		}
		this.onSubmit = this.onSubmit.bind(this);
	};


	onSubmit(userData) {
		fetch('/chatterbox/login', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: { "Content-Type": "application/json" }
		})
		.then(res => res.json())
		.then(data => {
			if(data.loginStatus) {
				this.setState({
					user_name: data.user_name,
					user_email: data.user_email,
					loginStatus: data.loginStatus
				})
			}
		})
		.catch(error => console.log(`Error: ${ error }`))
	};


	render() {
		let ChatterBoxView = <ChatModal userData={this.state}/>

		if(!this.state.loginStatus) {
			ChatterBoxView = <Login onSubmit={this.onSubmit} />
		}

		return (
			<div className="chatter-box-app-body">
				ChatterBoxApp
				{ ChatterBoxView }
			</div>
			)
	}
};