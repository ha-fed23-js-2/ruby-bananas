import React from 'react';
import './Menu.css';
import NavMenu from './NavMenu';
import useStore from './store.js';

function Menu() {
	const courses = useStore((state) => state.courses);
	const addToCheckout = useStore((state) => state.addToCheckout);

	return (
		<>
			<NavMenu />
			<section className='gallerySection'>
				<div className='gallery'>
					{courses.map((course) => (
						<div className='menu-container' key={course.id}>
							<img className="image" src={course.image} alt={course.title} />
							<div className="overlay">
								<div className='menu-info'>
									<h2 className='menu-title'>{course.title}</h2>
									<h4 className='menu-decription'>{course.description}</h4>

									<div className='button-row'>
										<button className='add-btn' onClick={() => addToCheckout(course)}>Add ${course.price} + {addToCheckout.state}</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default Menu;
