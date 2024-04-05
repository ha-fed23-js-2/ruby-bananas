import { useState } from 'react'
import './edit-menu.css'
import EditMenuItem from './EditMenuItem'
import EditMenuForm from './EditMenuForm'
// import editMenuStore from './data/editMenuStore'


function EditMenu() {

	return (
		<div className="page-container">
			<EditMenuItem />
			<EditMenuForm/>
		</div>

	)
}

export default EditMenu