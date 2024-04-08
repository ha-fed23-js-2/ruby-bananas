
import logo from './logo.png'
import './Header.css'


function Header () {

	return (

		<header className='navbar'>

			<div></div>

			<div className='logo'><img src={logo} /></div>

			<div className='CTA'><button>Hamburger</button></div>

		</header>

	)
}


export default Header