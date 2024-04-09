import React from 'react';
import './ShoppingCart.css'


export default function ShoppingCart({ shoppingCart, removeFromBasket, price }) {

	const itemQuantities = {};

  // Calculate item quantities
 	shoppingCart.forEach(item => {
    if (item.id in itemQuantities) {
      itemQuantities[item.id]++;
    } else {
      itemQuantities[item.id] = 1;
    }
  });


  const renderedItemIds = [];


  return (
    <div className='shopping-cart-container'>
      <h1>Shopping Cart</h1>
	  <span className='back-arrow'>&#8656;</span>
	  

      <ul className='shopping-cart-list'>
	{/* //TODO: ternary operator (item inte redan finns, rendera item, annars rendera item en gång sedan redera hur många det finns av item) */}

	{shoppingCart.map((item, index) => {
          // Check if the item's ID is already rendered
          if (!renderedItemIds.includes(item.id)) {
			renderedItemIds.push(item.id)
            return (
              <li className='shopping-cart-item' key={index}>
                <img className='shopping-cart-img' src={item.image} alt="" />
                <div className='shopping-cart-text'>
                  <button
                    className='shopping-cart-remove-btn'
                    onClick={() => removeFromBasket(index)}>
                    <img src='../public/Vector.png' alt="x" />
                  </button>
                  <h2 className='shopping-cart-title'>{item.title}</h2>
                  <p className='shopping-cart-description'>{item.description}</p>
                  <p className='shopping-cart-price'>${item.price}</p>
				  <p className='shopping-cart-quantity'>{itemQuantities[item.id]}x</p>
                </div>
              </li>
            );
          } else {
            // If the item's ID is already rendered, return null
			itemQuantities[item.id]++;
            return null;
          }
        })}
      </ul>
	  <p className='total-amount'>Total amount: ${price}</p>
    </div>
  );
}