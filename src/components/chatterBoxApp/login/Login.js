import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
	constructor() {
		super()
		this.state = {
			user_name: 'bucket1',
			user_email: 'bucket1@mail1.com',
			user_password: 'password1'
		}
		this.onChange = this.onChange.bind(this)
		this.login = this.login.bind(this)
	};

	onChange(val,type) {
		this.setState({
			[type]: val
		})
	};

	login() {
		this.props.onSubmit(this.state)
		this.setState({
			user_name: '',
			user_email: '',
			user_password: ''
		})
	}

	render() {
		return (
				<div className="login-body">
					<input className="username-input"
												type="text"
												value={this.state.user_name}
												onChange={e => {this.onChange(e.target.value, "user_name")}}
												/>
					<input className="useremail-input"
												type="text"
												value={this.state.user_email}
												onChange={e => this.onChange(e.target.value, "user_email")}
												/>
					<input className="useremail-password"
												type="text"
												value={this.state.user_password}
												onChange={e => this.onChange(e.target.value, "user_password")}
												/>
					<button className="submit-btn"
													onClick={() => this.login()}
													>Login</button>
				</div>
			)
	}
};