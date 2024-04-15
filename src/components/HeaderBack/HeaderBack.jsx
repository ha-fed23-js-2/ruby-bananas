
import logo from './logo.png'
import './HeaderBack.css'

import { NavLink } from 'react-router-dom'


function HeaderBack () {

	return (

		<header>


			<div>
				<NavLink to="/"><button>Back</button></NavLink>
			</div>

				<div className='logo'><NavLink to="/"><img src={logo} /></NavLink></div>
				
			<div></div>
		</header>

	)
}


export default HeaderBack