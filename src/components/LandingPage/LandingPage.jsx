import { useState } from 'react'
import Header from '../Header/Header'

import './LandingPage.css'



function LandingPage() {

	return (
		<>
		<div className='landingPage'>
				<Header />
				<div className='welcome-text'>
					<div>a</div>
					<div>five</div>
					<div>star</div>
					<div>tasting</div>
					<div>experience</div>
				</div>

				<div className='arrow-div'>
					<button a href="#footer"> ↓ </button>
				</div>

		</div>

		</>
	)
}

export default LandingPage
