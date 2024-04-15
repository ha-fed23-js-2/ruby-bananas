import { useState } from 'react'
import Header from '../Header/Header'
import Menu from '../MenuPage/Menu'
import Footer from '../Footer/Footer'

import './LandingPage.css'

function LandingPage() {

	return (
		<>
			<section className='landingPage'>
				<Header />
				<div className='welcome-text'>
					<div>a</div>
					<div>five</div>
					<div>star</div>
					<div>tasting</div>
					<div>experience</div>
					<h2 className='arrow'> ↓ </h2>
				</div>

			</section>

			<Menu />
			<Footer />

		</>
	)
}

export default LandingPage
