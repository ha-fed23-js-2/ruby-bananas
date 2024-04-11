
import logo from './logo.png'
import './Header.css'

import { NavLink } from 'react-router-dom'


function Header () {

	return (

		<header className='header' id="top">

		<div></div>

			<div className='logo'><img src={logo} /></div>

			<nav>
				<ul>
					<li>
						<NavLink to="/">Hem</NavLink>
						<NavLink to="/edit">Edit</NavLink>
						<NavLink to="/login">Login</NavLink>
						<NavLink to="/form">Form</NavLink>
					</li>
				</ul>
		</nav>




		</header>

	)
}


export default Header