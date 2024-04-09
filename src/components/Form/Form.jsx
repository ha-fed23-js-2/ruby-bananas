import React from 'react';
import { Link } from 'react-router-dom'

import './form.css';

function ReservationForm() {
	const handleSubmit = (event) => {
		event.preventDefault();

	};

	return (
		<>
		<header>
				<div>
				<Link to="/"><button>Back</button></Link>
				</div>
				<div className='logo'>
				<img src="./logo.png"/>
				</div>

			</header>

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
				<button type="submit">Book your experience</button>
			</form>
		</section>
		</>
	);
}

export default ReservationForm;
