import { useState } from 'react'
import Header from '../Header/HeaderPage'
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
					<button> ↓ </button>
				</div>

				<img src="./MASAFEJUJA.svg"/>
			</section>

			<Menu />
			<Footer />

		</>
	)
}

export default LandingPage
