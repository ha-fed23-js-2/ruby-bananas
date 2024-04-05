import './NavMenu.css';
import React, { useState } from 'react';

function NavMenu() {
	const [Guests, setGuests] = useState(1);

	const handleGuest = (event) => {
		setGuests(Number(event.target.value));
	};

	// Calculating total dishes (3 dishes per guest)
	const totalDishes = Guests * 3;

	return (
		<header className='navbar'>
			<div>
				<label> Guests: </label>
				<select onChange={handleGuest} value={Guests}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			</div>

			<div className='count'>{totalDishes} / {Guests} guests)</div>

			<div className='CTA'><button>Proceed</button></div>
		</header>
	);
}

export default NavMenu;
