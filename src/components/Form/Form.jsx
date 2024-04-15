import React from 'react';
import { NavLink } from 'react-router-dom'
import HeaderBack from '../HeaderBack/HeaderBack'

import './form.css';

function ReservationForm() {
	const handleSubmit = (event) => {
		event.preventDefault();

	};

	return (
		<>

		<HeaderBack/>

		<section className='formSection'>

		<form onSubmit={handleSubmit} className="reservation-form">
		<h1>We want to know about you</h1>
				<div className="input-group">
					<input type="text" name="fullName" placeholder="Full name" />
						<div className='split-form'>
							<input type="email" name="email" placeholder="Email" />
							<input type="tel" name="phoneNumber" placeholder="Phone number" />
						</div>
					<textarea name="allergies" placeholder="Any allergies or other preferences" />
				</div>
				<div className="booking-conditions">
					<p>Booking conditions</p>
					<p>Please note your seating time. Please note that we will hold your table for 3 minutes after your booked time</p>
				</div>
				<NavLink to="/thanks"><button type="submit">Book your experience</button></NavLink>
			</form>
		</section>
		</>
	);
}

export default ReservationForm;
