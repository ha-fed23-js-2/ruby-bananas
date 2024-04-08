import { navStore } from './navStore';
import './NavMenu.css'


function NavMenu() {

	const {selectedCourses, requiredCourses, inc, set} = navStore();

	function handleGuestChange(event) {
		const selectedGuests = event.target.value
		// const updatedCourses = ;
        const updatedRequiredCourses = selectedGuests * 3;
        inc(); 
        set({ guest: selectedGuests,
			//  courses: updatedCourses,
			 requiredCourses: updatedRequiredCourses,
			});
	}



	return (

		<header className='guest-navbar'>

			<div>
			<label> Guests: </label>
			<select onChange={handleGuestChange}>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			</select>
			</div>

			<p className='dishes-count'> Selected dishes: {selectedCourses}</p>
			<p className='dishes-count'>Minimum dishes: {requiredCourses} </p>
			<button className='proceed-btn CTA' 
			disabled={selectedCourses < requiredCourses} 
			>Proceed to 🛒{selectedCourses}
			</button>
		

		</header>

	)
}


export default NavMenu