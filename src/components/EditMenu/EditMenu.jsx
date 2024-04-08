import { useState } from 'react'
import './edit-menu.css'
import EditMenuItem from './EditMenuItem'
import EditMenuForm from './EditMenuForm'
import {editMenuStore} from './data/editMenuStore'
// import editMenuStore from './data/editMenuStore'


function EditMenu() {
const {menu} = editMenuStore((state) =>  ({menu: state.menu}))
	return (
		<div className="page-container">
			<EditMenuForm/>
			{menu.map((item, i) => (<EditMenuItem item={item} key={i}  />))}
		</div>

	)
}

export default EditMenu