import { navStore } from './navStore';
import './NavMenu.css';
import { NavLink } from 'react-router-dom'


function NavMenu() {
   const { shoppingCart, requiredDishes, handleGuestChange } = navStore();
   const totalSelectedCourses = shoppingCart.reduce((acc, item) => acc + item.quantity, 0); // Динамически вычисляем общее количество выбранных блюд

   return (
       <header id="menu" className='guest-navbar'>
           <div>
               <label> Guests: </label>
               <select onChange={handleGuestChange}>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
               </select>
           </div>

           <p className='dishes-count'> Selected dishes: {totalSelectedCourses}</p>
           <p className='dishes-count'>Minimum dishes: {requiredDishes} </p>
           <NavLink to="/cart"> <button className='proceed-btn CTA' disabled={totalSelectedCourses < requiredDishes}>
               Proceed to 🛒{totalSelectedCourses}
           </button> </NavLink>
       </header>
   );
}

export default NavMenu;
