import './NavMenu.css';
import React, { useState } from 'react';
import {navStore} from './navStore'

function NavMenu() {
	const [Guests, setGuests] = useState(1);

	const handleGuest = (event) => {
		setGuests(Number(event.target.value));
	};

	// Calculating total dishes (3 dishes per guest)
	const totalDishes = Guests * 3;

	const { guest, courses, requiredCourses, inc, set } = navStore();

	function handleGuestChange(event) {
		const selectedGuests = event.target.value
		// const updatedCourses = ;
		const updatedRequiredCourses = selectedGuests * 3;
		inc();
		set({
			guest: selectedGuests,
			//  courses: updatedCourses,
			requiredCourses: updatedRequiredCourses,
		});

	}

	return (
		<header className='navbar' id="menuPage">
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

			<div className='CTA'><button className='add-btn'>Proceed</button></div>
		</header>
	);
}

export default NavMenu;
