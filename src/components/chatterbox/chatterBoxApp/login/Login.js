import React, { Component } from 'react';
import './Login.css';

const Login = ({ userState, onChange, onSubmit }) => {
	return (
			<div className="login-body">
				<input className="username-input"
											type="text"
											value={userState.user_name}
											onChange={e => {onChange(e.target.value, "user_name")}}
											/>
				<input className="useremail-input"
											type="text"
											value={userState.user_email}
											onChange={e => onChange(e.target.value, "user_email")}
											/>
				<input className="useremail-password"
											type="text"
											value={userState.user_password}
											onChange={e => onChange(e.target.value, "user_password")}
											/>
				<button className="submit-btn"
												onClick={() => onSubmit()}
												>Login</button>
			</div>
		)
}

export default Login;