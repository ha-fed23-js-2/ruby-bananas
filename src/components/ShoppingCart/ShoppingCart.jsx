import React from 'react';
import './ShoppingCart.css';
import { navStore } from '../MenuPage/navStore';
import { Link } from 'react-router-dom'

export default function ShoppingCart() {
   const { shoppingCart, removeFromBasket, removeOneFromBasket ,totalAmount, plusOneInBasket } = navStore((state) => ({
       shoppingCart: state.shoppingCart,
       removeFromBasket: state.removeFromBasket,
	   removeOneFromBasket: state.removeOneFromBasket,
	   plusOneInBasket: state.plusOneInBasket,
       totalAmount: state.shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
   }));

   return (

	<section className='shopping-page'>

	<div className='shopping-cart-container'>

		<header className='shopping-cart-header'>
			<div className='back-btn-wrapper'>
				<Link to="/"><button>Back</button></Link>
			</div>
			<div className='logo'>
				<img src="./logo.png" />
			</div>
		</header>


		<ul className='shopping-cart-list'>
		{shoppingCart.map((item) => (
			<li className='shopping-cart-item' key={item.id}>

			<div className='image-column'>
				<img className='shopping-cart-img' src={item.image} alt={item.name} />
			</div>

			<div className='shopping-cart-text'>
				<h2 className='shopping-cart-title'>{item.name}</h2>
				<p className='shopping-cart-description'>{item.description}</p>
				<p className='shopping-cart-contains'>{item.contains}</p>
					<p className='shopping-cart-price'>${item.price}</p>
				<span className='quantity'><button onClick={() => removeOneFromBasket(item.id)}>-</button> {item.quantity} <button onClick={() => plusOneInBasket(item.id)}>+</button></span>

			</div>

				<div className='shopping-cart-remove-btn' onClick={() => removeFromBasket(item.id)}>
				<img src='../public/Vector.png' alt="remove" /></div>


			</li>
		))}
		</ul>
		<div className='proceed-wrapper'>
		<button>Proceed</button>
		<p className='total-amount'>Total amount: ${totalAmount}</p>
		</div>
  </div>
	   </section>
   )
}
