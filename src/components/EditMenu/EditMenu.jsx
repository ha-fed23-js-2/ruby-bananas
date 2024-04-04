import { useState } from 'react'
import './edit-menu.css'
import EditMenuItem from './EditMenuItem'


function EditMenu() {

	return (
		<div className="page-container">
			<EditMenuItem />
			<button>Add</button>
		</div>

	)
}

export default EditMenu