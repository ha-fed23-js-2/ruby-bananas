import React from 'react';
import { NavLink } from 'react-router-dom'
import HeaderBack from '../HeaderBack/HeaderBack'

import './thanks.css';

function Thanks() {


	return (
		<>

		<HeaderBack/>

		<section className='thanks-section'>

			<div className='thanks-div'>
					<h2 className='thank-you-text'>
					We appreciate your attempt to secure a place amongst the elite. We'll grace you with a date that meets our discerning tastes. Await our verdict.
					</h2>
			</div>

			<NavLink to="/"> Home </NavLink>

		</section>
		</>
	);
}

export default Thanks;
