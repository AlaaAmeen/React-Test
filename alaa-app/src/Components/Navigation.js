import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';  //for the horizontal lines for menu
import {faBars} from '@fortawesome/free-solid-svg-icons';        //for the horizontal lines for menu
import {useTransition, animated} from 'react-spring';
import NavMenu from './NavMenu';


function Navigation () {

	const [showMenu, setShowMenu] = useState(false);

	const maskTransitions = useTransition(showMenu, null, {
			from: { position: 'absolute', opacity: 0 },
			enter: { opacity: 1 },
			leave: { opacity: 0 },
			})

	const menuTransitions = useTransition(showMenu, null, {
			from: { opacity: 0, transform: 'translateX(-100%)'},
			enter: { opacity: 1, transform: 'translateX(0%)'},
			leave: { opacity: 0 , transform: 'translateX(-100%)'},
			})


	return (

		<nav>
			<FontAwesomeIcon
				icon = {faBars}
				onClick = { () => setShowMenu(!showMenu)}
			/>

			{maskTransitions.map(({ item, key, props }) =>
			item && <animated.div 
					key={key} 
					style={props}
					className="mask"
					onClick = { () => setShowMenu(false)}
					>
			</animated.div>
			)}

			{menuTransitions.map(({ item, key, props }) =>
			item && <animated.div 
					key={key} 
					style={props}
					className="menu"
					>
					<NavMenu closeMenu = {() => setShowMenu(false)}/>
			</animated.div>
			)}

			
		</nav>

	)
}

export default Navigation;