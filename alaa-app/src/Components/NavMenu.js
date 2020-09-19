import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function NavMenu (props){
	return(

		<div>
			<span>
				This is the menu
			</span>
			<ul className="navList">
	          <li>
	            <Link className = "navMenu" to="/"
		            onClick={props.closeMenu}>
		            Home
	            </Link>
	          </li>

	          <li>
	            <Link className = "navMenu" to="/about" 
		            onClick={props.closeMenu}>
		            About
	            </Link>
	          </li>
          </ul>
		</div>
	)
}

export default NavMenu