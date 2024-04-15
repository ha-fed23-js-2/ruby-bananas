import React from 'react';
import './ShoppingCart.css';
import { navStore } from '../MenuPage/navStore';
import { NavLink } from 'react-router-dom'
import HeaderBack from '../HeaderBack/HeaderBack'

export default function ShoppingCart() {
	const { shoppingCart, removeFromBasket, removeOneFromBasket, totalAmount, plusOneInBasket, requiredDishes } = navStore((state) => ({
		shoppingCart: state.shoppingCart,
		removeFromBasket: state.removeFromBasket,
		removeOneFromBasket: state.removeOneFromBasket,
		plusOneInBasket: state.plusOneInBasket,
		totalAmount: state.shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
		requiredDishes: state.requiredDishes,
	}));
		const totalSelectedCourses = shoppingCart.reduce((acc, item) => acc + item.quantity, 0)
	
	return (

		<section className='shoppingPage'>
			<HeaderBack />

			<div className='shopping-cart-container'>

				<ul className='shopping-cart-list'>
					{shoppingCart.map((item) => (
						<div>
							<li className='shopping-cart-item' key={item.id}>
								<img className='shopping-cart-img' src={item.image} alt={item.name} />
								<div className='shopping-cart-text'>
									<span className='shopping-cart-remove-btn' onClick={() => removeFromBasket(item.id)}>
										<img src='./Vector.png' alt="remove" />
									</span>
									<h2 className='shopping-cart-title'>{item.name}</h2>
									<p className='shopping-cart-description'>{item.description}</p>
									<p className='shopping-cart-contains'>{item.contains}</p>
									<p className='shopping-cart-price'>${item.price}</p>
									</div>


									<div className='spliter'>
				
										<span className='shopping-cart-quantity'><button onClick={() => removeOneFromBasket(item.id)}>-</button> {item.quantity} <button onClick={() => plusOneInBasket(item.id)}>+</button></span></div>
							</li>
						</div>
					))}
				</ul>


				<p className='total-amount'>Total amount: ${totalAmount}</p>
				<NavLink to="/form"><button disabled={totalSelectedCourses < requiredDishes}>Proceed</button></NavLink>
			</div>

		</section>


	)
}
