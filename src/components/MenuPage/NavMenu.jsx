
import './NavMenu.css'


function NavMenu() {

	return (

		<header className='navbar'>

			<div>
			<label> Guests: </label>
			<select>
			<option value="1">1  </option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			</select>
			</div>

			<div className='count'> 4/6 </div>

			<div className='CTA'><button >Proceed</button></div>

		</header>

	)
}


export default NavMenu