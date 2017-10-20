import React from 'react';
import Navbar from '../navbar/Navbar';
import ChatterBoxApp from '../chatterBoxApp/ChatterBoxApp';
import './Header.css';


const Header = () => {

		return(
			<div className="header-body">
				<Navbar />
				<ChatterBoxApp />
			</div>
		)

}

export default Header