
import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom'
import HeaderBack from '../HeaderBack/HeaderBack'
import { Link } from 'react-router-dom'
import Joi from 'joi';

import './form.css';

function ReservationForm() {
	// State variables for the form fields
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)
	const [email, setEmail] = useState('')
	const [emailTouched, setEmailTouched] = useState(false)
	const [number, setNumber] = useState('')
	const [numberTouched, setNumberTouched] = useState(false)
	const [allergies, setAllergies] = useState('')


	// Validate values
	const nameIsValid = name.length > 0;
	const nameErrorMessage = nameIsValid ? '' : 'Please enter your name.';

	const numberIsValid = /^\d+$/.test(number);
	const numberErrorMessage = numberIsValid ? '' : 'Please enter your phone number.';



	// Validation schema for email
	const emailSchema = Joi.string().email({ tlds: false })
	const emailResult = emailSchema.validate(email)
	const emailIsValid = !emailResult.error
	const emailErrorMessage = 'Please enter a valid email address.'

	const formIsValid = nameIsValid && emailIsValid && numberIsValid
	// CSS variables
	let nameErrorClass = 'error ', nameClass = ''
	if (!nameTouched) {
		nameErrorClass += 'hidden'
	} else {
		nameErrorClass += nameIsValid ? 'hidden' : 'invalid'
		nameClass += nameIsValid ? 'valid' : 'invalid'
	}
	let numberErrorClass = 'error ', numberClass = ''
	if (!numberTouched) {
		numberErrorClass += 'hidden'
	} else {
		numberErrorClass += numberIsValid ? 'hidden' : 'invalid'
		numberClass += numberIsValid ? 'valid' : 'invalid'
	}
	let emailErrorClass = 'error ', emailClass = ''
	if (!emailTouched) {
		emailErrorClass += 'hidden'
	} else {
		emailErrorClass += emailIsValid ? 'hidden' : 'invalid'
		emailClass += emailIsValid ? 'valid' : 'invalid'
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = {
			name,
			email,
			number
		}
		// console.log('Data from form: ', formData)
		// Reset form fields
		setName('');
		setNameTouched(false);
		setEmail('');
		setEmailTouched(false);
		setNumber('');
		setNumberTouched(false);
		setAllergies('');
	};

	return (
		<>
			<HeaderBack />

			<section className='formSection'>

				<form onSubmit={handleSubmit} className="reservation-form">
					<h1>We want to know about you</h1>
					<div className="input-group">
						<input
							className={nameClass}
							type="text"
							name="fullName"
							value={name}
							placeholder='Full name'
							onChange={(event) => setName(event.target.value)}
							onBlur={() => setNameTouched(true)}
						/>
						<p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>
						<div className='split-form'>
							<input
								type='email'
								className={emailClass}
								value={email}
								name="email"
								placeholder="Email"
								onChange={event => setEmail(event.target.value)}
								onBlur={() => setEmailTouched(true)}
							/>
							<p className={emailErrorClass}> {emailErrorMessage} &nbsp; </p>
							<input
								className={numberClass}
								value={number}
								type="tel"
								name="phoneNumber"
								placeholder="Phone number"
								onChange={(event) => setNumber(event.target.value)}
								onBlur={() => setNumberTouched(true)}
							/>
							<p className={numberErrorClass}> {numberErrorMessage} &nbsp; </p>
						</div>
						<textarea
							onChange={(event) => setAllergies(event.target.value)}
							value={allergies}
							name="allergies"
							placeholder="Any allergies or other preferences"
						/>
					</div>
					<div className="booking-conditions">
						<p>Booking conditions</p>
						<p>Please note your seating time. Please note that we will hold your table for 3 minutes after your booked time</p>
					</div>
					<NavLink to="/thanks">
						<button
							disabled={!formIsValid}
							type="submit"
						>Book your experience
					</button></NavLink>
				</form>
			</section>
		</>
	);
}

export default ReservationForm;