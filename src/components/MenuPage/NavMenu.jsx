import { navStore } from './navStore';
import './NavMenu.css'
import { Link } from 'react-router-dom'



function NavMenu() {

	const {shoppingCart, requiredDishes, set} = navStore();

	function handleGuestChange(event) {
		const selectedGuests = event.target.value
	
        set({ guests: selectedGuests,
			 requiredDishes: selectedGuests * 3,
			});
	}



	return (

		<header id="menu" className='guest-navbar'>

			<div>
			<label> Guests: </label>
			<select onChange={handleGuestChange}>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			</select>
			</div>

			<p className='dishes-count'> Selected dishes: {shoppingCart.length}</p>
			<p className='dishes-count'>Minimum dishes: {requiredDishes} </p>
			<button className='proceed-btn CTA' 
			disabled={shoppingCart.length < requiredDishes} 
			>Proceed to 🛒{shoppingCart.length}
			</button>


		</header>

	)
}


export default NavMenu