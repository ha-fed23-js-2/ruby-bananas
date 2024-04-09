import React from 'react';
import './ShoppingCart.css'


export default function ShoppingCart({ shoppingCart, removeFromBasket }) {



  return (
    <div className='shopping-cart-container'>
      <h1>Shopping Cart</h1>
	  <span className='back-arrow'>&#8656;</span>

      <ul className='shopping-cart-list'>
        {shoppingCart.map((item, index) => (
          <li className='shopping-cart-item' key={index}>
			<img className='shopping-cart-img' src={item.image} alt="" />
			<div className='shopping-cart-text'>
				<h2 className='shopping-cart-title'>{item.title}</h2>
				<p className='shopping-cart-description'>{item.description}</p>
				<p className='shopping-cart-price'>${item.price}</p>
			</div>

			<button
				className='shopping-cart-remove-btn'
				onClick={() => removeFromBasket(item)}>
				<img src='../public/Vector.png' alt="x" />
				</button>
          </li>
        ))}
      </ul>
    </div>
  );
}