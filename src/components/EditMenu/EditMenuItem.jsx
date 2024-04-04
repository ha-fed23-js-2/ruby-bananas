
function EditMenuItem() {

	return (
		<>
			<div className="edit-menu-item-container">
				<img src={''} alt="img" className='course-img' />
				<div className="column">
					<h3>Title</h3>
					<p className="edit-menu-item-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore explicabo quod sint consectetur cum molestias impedit consequuntur nobis necessitatibus, unde suscipit beatae! Velit odit perspiciatis, minus consequuntur eveniet exercitationem tenetur?</p>
				</div>
				<div className="column2">
					<button>
						<img src={''} alt="" className='close' />
					</button>
					<p className="edit-menu-item-price">20$</p>
				</div>
			</div>
		</>
	)

}

export default EditMenuItem