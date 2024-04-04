import { useState } from 'react'


import './Menu.css'
import NavMenu from './NavMenu'
import courses from './menuList.js'

function Menu() {

	return (

		<>
		<NavMenu/>



			<section className='gallerySection'>

				<div className='gallery'>

					{courses.map((course, index) => (

					<div className='menu-container' key={course.id}>
							<img className="image" src={course.image} alt={course.title}/>
							<div className="overlay">
							<h2>{course.title}</h2>
							<p>{course.description}</p>
							<p>{course.contains}</p>
							<h4>{course.price}</h4>
						</div>
					</div>
					))}

			</div>
			</section>

		</>
	)
}

export default Menu
