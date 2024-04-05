import { navStore } from './navStore';
import './NavMenu.css'


function NavMenu() {

	const {guest, courses, requiredCourses, inc, set} = navStore();

	function handleGuestChange(event) {
		const selectedGuests = event.target.value
		const updatedCourses = selectedGuests;
        const updatedRequiredCourses = selectedGuests * 3;
        inc(); 
        set({ guest: selectedGuests,
			 courses: updatedCourses,
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
			<option value="5">5</option>
			<option value="6">6</option>
			</select>
			</div>

			<div className='count'> {courses}/{requiredCourses} </div>

			<div className='CTA'><button >Proceed</button></div>

		</header>

	)
}


export default NavMenu