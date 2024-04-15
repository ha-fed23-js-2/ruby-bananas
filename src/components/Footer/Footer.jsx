import { useState } from 'react'

import './Footer.css'


function Footer() {

	return (
		<>
			<section className='footerSection' id="footer">

			<div className='star-container'>

					<img src='/MichelinStar.png'></img>
					<img src='/MichelinStar.png'></img>
					<img src='/MichelinStar.png'></img>
					<img src='/MichelinStar.png'></img>
					<img src='/MichelinStar.png'></img>
			</div>



				<div className='arrow-div'>

					<button> <a href="#top"> ↑ </a></button>
				</div>


				<div className='footer-info'>

					<div className='footer-column'>
						<h5 className='footer-title'>LOCATION</h5>
						<span className='line'></span>
						<h5>Strandvägen 1</h5>
						<h5>Östermalm 112 30</h5>
						<h5>Stockholm, Sweden</h5>
					</div>

					<div className='footer-column'>
						<h5 className='footer-title'>HOURS</h5>
						<span className='line'></span>
						<h5>Sundays: Closed</h5>
						<h5>Mon-Thu 5:00 PM - 11:00 PM</h5>
						<h5>Fri - Sat 5:00 PM - 10:00 PM</h5>
					</div>

					<div className='footer-column'>
						<h5 className='footer-title'>PRESS & RESERVATION</h5>
						<span className='line'></span>
						<h5>+46 812 3456</h5>
						<h5>reserve@masafejuja.com</h5>
						<h5>press@theregaltable.com</h5>
					</div>

					<div className='footer-column'>
						<h5 className='footer-title'>MASA FEJUJA GROUP AB</h5>
						<span className='line'></span>
						<h5>Nominated to Micheline Dominator</h5>
						<h5>reserve@masafejuja.com</h5>
						<h5>press@theregaltable.com</h5>
					</div>


					</div>





			</section>

		</>
	)
}

export default Footer
