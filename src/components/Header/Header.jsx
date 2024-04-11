
import logo from './logo.png'
import './Header.css'

import { Link } from 'react-router-dom'


function Header () {

	return (

		<header className='header' id="top">

		<div></div>

			<div className='logo'><img src={logo} /></div>

			<nav>
				<ul>
					<li>
						<Link to="/">Hem</Link>
						<Link to="/redigera">Redigera</Link>
						<Link to="/login">Login</Link>
						<Link to="/form">Form</Link>
						<a href="#footer">Contact</a>
					</li>
				</ul>
		</nav>




		</header>

	)
}


export default Header