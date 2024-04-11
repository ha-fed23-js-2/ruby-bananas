import { navStore } from './navStore';
import './Menu.css'
import NavMenu from './NavMenu'
import { editMenuStore } from '../EditMenu/data/editMenuStore.js'
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import { useState } from 'react';


function Menu() {
	const courses = editMenuStore(state => state.menu)
	const [totalPrice, setTotalPrice] = useState(0);
	// const shoppingCart = navStore(state => state.shoppingCart)
	const { addToBasket } = navStore();

	return (

		<>
		<NavMenu/>

			<section className='gallerySection'>


				<div className='gallery'>

					{courses.map((course, index) => (

					<div className='menu-container' key={course.id}>
							<img className="image" src={course.image} alt={course.name}/>
							<div className="overlay">
							<div className='menu-info'>
							<h2 className='menu-title'>{course.name}</h2>
							<p>{course.description}</p>
							<p>{course.contains} </p>
							
							<div className='button-row'>
							<h4>${course.price}</h4>
							<button onClick={() => addToBasket(course, setTotalPrice)}>Add</button>
							{/* <button onClick={removeFromBasket}>Remove</button> */}
							</div>
							</div>
						</div>
					</div>
					))}

			</div>
			</section>

			
		</>
	)
}

export default Menu
