import React from 'react';
import Navbar from '../navbar/Navbar';
import ChatterBox from '../chatterbox/ChatterBox';
import './Header.css';


const Header = () => {

		return(
			<div className="header-body">
				<Navbar />
				<ChatterBox />
			</div>
		)

}

export default Header