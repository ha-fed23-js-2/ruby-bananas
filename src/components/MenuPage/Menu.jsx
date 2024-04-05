import { navStore } from './navStore';
import './Menu.css'
import NavMenu from './NavMenu'
import courses from './menuList.js'

function Menu( ) {

	const {selectedCourses, set, requiredCourses} = navStore();

	function addToBasket() {
		if (selectedCourses < requiredCourses) {
			set ( (state ) => ({ selectedCourses: state.selectedCourses + 1}))

		}
	} 

	function removeFromBasket() {
		if (selectedCourses > 0)
		set ( (state ) => ({ selectedCourses: state.selectedCourses - 1}))
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
							<button onClick={addToBasket}>Add</button>
							<button onClick={removeFromBasket}>Remove</button>
							</div>
							</div>
						</div>
					</div>
					))}

			</div>
			</section>

		</>
	)
}

export default Menu
