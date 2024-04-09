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
				</div>

				<div className='arrow-div'>
					<button><a href="#menu"> ↓ </a></button>
				</div>

			</section>

			<Menu />
			<Footer />

		</>
	)
}

export default LandingPage
