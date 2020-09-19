import React from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom'

function Header () {

	return (

		<header className = "header-style">
			<Link to="/" className="navMenu">
			My First App
			</Link>
			<Navigation />
		</header>

	)
}

export default Header;