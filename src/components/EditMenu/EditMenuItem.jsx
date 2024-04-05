// import editMenuStore from './data/editMenuStore'
function EditMenuItem() {

	return (
		<>
			<div className="edit-menu-item-container">
				
					<img src='./Masa1.png' alt="img" className='course-img' />
					<div className="column">
						<h3>Forêt Noire Fungi Étagère</h3>
						<p className="edit-menu-item-description">A tiered display of black foraged mushrooms resting on a petrified rye toast, complemented by a Chantilly of porcini essence.Foraged mushrooms, rye toast, porcini cream</p>
					</div>
				<div className="column2">
					<button>
						<img src='./Vector.png' alt="" className='close' />
					</button>
					<p className="edit-menu-item-price">20$</p>
				</div>
				
			</div>
			<hr className="hr" />
		</>
	)

}

export default EditMenuItem