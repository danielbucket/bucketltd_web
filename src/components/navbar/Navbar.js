import React from 'react';

const Navbar = () => {
  return (

    <header className="navbar-header"
            style={require('./Navbar.css')}
            >
      <img className="bucket-logo"
        			src={require("./images/bucket-icon-yellow-b.png")}
              alt="bucket logo"
        			/>
      <h1 className="page-title">
        <span className="yellow"><span className="the-b">B</span>ucket</span>
        <span className="un">Un</span>
        <span className="yellow">Limited</span>
      </h1>

    </header>

  );
};

export default Navbar;
