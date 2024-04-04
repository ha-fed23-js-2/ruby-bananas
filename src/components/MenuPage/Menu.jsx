import { useState } from 'react'

import './Menu.css'

import template from './template.png'


function Menu() {

	return (
		<>
			<section className='gallerySection'>
				<div className='gallery'>
					<div className='container'>
					<img src={template}/>
						<div class="overlay">
							<div class="text">Hello World</div>
						</div>
					</div>

					<div className='container'>
						<img src={template} />
						<div class="overlay">
							<div class="text">Hello World</div>
						</div>
					</div>


					<div className='container'>
						<img src={template} />
						<div class="overlay">
							<div class="text">Hello World</div>
						</div>
					</div>


					<div className='container'>
						<img src={template} />
						<div class="overlay">
							<div class="text">Hello World</div>
						</div>
					</div>


					<div className='container'>
						<img src={template} />
						<div class="overlay">
							<div class="text">Hello World</div>
						</div>
					</div>


					<div className='container'>
						<img src={template} />
						<div class="overlay">
							<div class="text">Hello World</div>
							<button className='add-btn'>Add</button>
						</div>
					</div>


				</div>

			</section>

		</>
	)
}

export default Menu
