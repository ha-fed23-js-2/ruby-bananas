import React from 'react';
import './ShoppingCart.css';
import { navStore } from '../MenuPage/navStore';
import { Link } from 'react-router-dom'

export default function ShoppingCart() {
   const { shoppingCart, removeFromBasket, totalAmount } = navStore((state) => ({
       shoppingCart: state.shoppingCart,
       removeFromBasket: state.removeFromBasket,
       totalAmount: state.shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
   }));

   return (
	
	<div className='shopping-cart-container'>
	

<header>
	<div>
		<Link to="/"><button>Back</button></Link>
	</div>
	<div className='logo'>
		<img src="./logo.png" />
	</div>

</header>

	<h1>Shopping Cart Temporary Title</h1>
	<ul className='shopping-cart-list'>
	  {shoppingCart.map((item) => (
		<li className='shopping-cart-item' key={item.id}>
		  <img className='shopping-cart-img' src={item.image} alt={item.name} />
		  <div className='shopping-cart-text'>
			<span className='shopping-cart-remove-btn' onClick={() => removeFromBasket(item.id)}>
			  <img src='../public/Vector.png' alt="remove" />
			</span>
			<span className='shopping-cart-quantity'>Quantity: {item.quantity}</span>
			<h2 className='shopping-cart-title'>{item.name}</h2>
			<p className='shopping-cart-description'>{item.description}</p>
			<p className='shopping-cart-contains'>{item.contains}</p>
			<p className='shopping-cart-price'>${item.price}</p>
		  </div>
		</li>
	  ))}
	</ul>
	<p className='total-amount'>Total amount: ${totalAmount}</p>
	<button>Proceed</button>
  </div>
   )
}
