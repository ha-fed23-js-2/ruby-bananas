import { navStore } from './navStore';
import './Menu.css'
import NavMenu from './NavMenu'
import courses from './menuList.js'
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import { useState } from 'react';


function Menu( ) {

	const [totalPrice, setTotalPrice] = useState(0);
	const shoppingCart = navStore(state => state.shoppingCart)

	function addToBasket(course) {

		navStore.setState((state) => ({
			...state,
			shoppingCart: [...state.shoppingCart, {...course, price: course.price}],
			selectedCourses: state.selectedCourses + 1
		}));

		setTotalPrice(prevPrice => prevPrice + course.price)
	} 

	function removeFromBasket(index) {
		const removedItem = shoppingCart[index];
		
		navStore.setState((state) => ({
                ...state,
                shoppingCart: [
					...state.shoppingCart.slice(0, index),
					...state.shoppingCart.slice(index + 1),
				],
                selectedCourses: state.selectedCourses > 0 ? state.selectedCourses - 1 : 0

		}));

		setTotalPrice(prevPrice => prevPrice - removedItem.price)
		
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
							{/* <button onClick={removeFromBasket}>Remove</button> */}
							</div>
							</div>
						</div>
					</div>
					))}

			</div>
			</section>

			<ShoppingCart price={totalPrice} shoppingCart={shoppingCart} removeFromBasket={removeFromBasket}/>

		</>
	)
}

export default Menu
