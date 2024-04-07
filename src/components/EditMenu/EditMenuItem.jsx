
import { useState } from "react"
import {editMenuStore} from './data/editMenuStore'
function EditMenuItem({item}) {

	const {deleteMenuItem} = editMenuStore((state) =>{return{deleteMenuItem: state.deleteMenuItem}})

	


	return (
		<>
			<div className="edit-menu-item-container">
				
					<img src={item.image} alt="" className='course-img' />
					<div className="column">
						<h3>{item.name}</h3>
						<p className="edit-menu-item-description">{item.description}</p>
					</div>
				<div className="column2">
					<button onClick={() => deleteMenuItem(item.id) }>
						<img src='./Vector.png' alt="" className='close' />
					</button>
					<p className="edit-menu-item-price">{item.price}</p>
				</div>
				
			</div>
			<hr className="hr" />
		</>
	)

}

export default EditMenuItem