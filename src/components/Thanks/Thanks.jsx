import React from 'react';
import { NavLink } from 'react-router-dom'
import HeaderBack from '../HeaderBack/HeaderBack'
import { navStore } from '../MenuPage/navStore';
import { useState, useEffect } from 'react';

import './thanks.css';

function Thanks() {

	const { clearShoppingCart } = navStore();

	useEffect(() => {
		// När komponenten monteras, rensa shoppingCart
		clearShoppingCart();

		// Rensa också localStorage
		localStorage.clear();
	}, []);


	return (
		<>

		<HeaderBack/>

		<section className='thanks-section'>

			<div className='thanks-div'>
					<h2 className='thank-you-text'>
					We appreciate your attempt to secure a place amongst the elite. We'll grace you with a date that meets our discerning tastes. Await our verdict.
					</h2>
			</div>

			<div>
				<NavLink to="/"><button>Back to home </button></NavLink>
			</div>

		</section>
		</>
	);
}

export default Thanks;
