import { navStore } from './navStore';
import './Menu.css'
import NavMenu from './NavMenu'
import courses from './menuList.js'
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import { useState } from 'react';

//TODO: skapa ny branch och ny component för shopping cart
//TODO: Skapa en ny lista i shopping cart och lägg till listobjektet man klickar på

function Menu( ) {

	const {selectedCourses, set} = navStore();
	const [shoppingCart, setShoppingCart] = useState([]); 

	function addToBasket(course) {
		setShoppingCart([...shoppingCart, course]);
		console.log(shoppingCart);
		set ( (state ) => ({ selectedCourses: state.selectedCourses + 1}))
	} 

	function removeFromBasket(courseToRemove) {
		const updatedCart = shoppingCart.filter(course => course !== courseToRemove);
    	setShoppingCart(updatedCart);
		if (selectedCourses > 0)
		set ( (state ) => ({ selectedCourses: state.selectedCourses - 1}))
	}

		

	return (

		<>
		<NavMenu/>

			<section className='gallerySection'>

				<div className='gallery'>

					{courses.map((course, index) => (

					<div className='menu-container' key={course.id}>
							<img className="image" src={course.image} alt={course.title}/>
							<div className="overlay">
							<div className='menu-info'>
							<h2 className='menu-title'>{course.title}</h2>
							<p>{course.description}</p>
							<p>{course.contains} </p>
							<p>Contains: {course.contains}</p>

							<div className='button-row'>
							<h4>${course.price}</h4>
							<button onClick={() => addToBasket(course)}>Add</button>
							<button onClick={removeFromBasket}>Remove</button>
							</div>
							</div>
						</div>
					</div>
					))}

			</div>
			</section>

			<ShoppingCart shoppingCart={shoppingCart} removeFromBasket={removeFromBasket}/>

		</>
	)
}

export default Menu
