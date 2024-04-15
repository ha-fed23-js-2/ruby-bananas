import React from 'react';
import './ShoppingCart.css';
import { navStore } from '../MenuPage/navStore';
import { NavLink } from 'react-router-dom'
import HeaderBack from '../HeaderBack/HeaderBack'

export default function ShoppingCart() {
   const { shoppingCart, removeFromBasket, removeOneFromBasket ,totalAmount, plusOneInBasket } = navStore((state) => ({
       shoppingCart: state.shoppingCart,
       removeFromBasket: state.removeFromBasket,
	   removeOneFromBasket: state.removeOneFromBasket,
	   plusOneInBasket: state.plusOneInBasket,
       totalAmount: state.shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
   }));

   return (
<>
	<HeaderBack />

	<div className='shopping-cart-container'>

	<h1>Excellent</h1>
	<ul className='shopping-cart-list'>
	  {shoppingCart.map((item) => (
		<li className='shopping-cart-item' key={item.id}>
		  <img className='shopping-cart-img' src={item.image} alt={item.name} />
		  <div className='shopping-cart-text'>
			<span className='shopping-cart-remove-btn' onClick={() => removeFromBasket(item.id)}>
			  <img src='./Vector.png' alt="remove" />
			</span>
			<h2 className='shopping-cart-title'>{item.name}</h2>
			<p className='shopping-cart-description'>{item.description}</p>
			<p className='shopping-cart-contains'>{item.contains}</p>
			<div className='spliter'>
			<p className='shopping-cart-price'>${item.price}</p>
			<span className='shopping-cart-quantity'><button onClick={() => removeOneFromBasket(item.id)}>-</button> {item.quantity} <button onClick={() => plusOneInBasket(item.id)}>+</button></span></div>
		  </div>
		</li>
	  ))}
	</ul>
	<p className='total-amount'>Total amount: ${totalAmount}</p>
		   <NavLink to="/form"><button>Proceed</button></NavLink>
  </div>
	   </>
   )
}
