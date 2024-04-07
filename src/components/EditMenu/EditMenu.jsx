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
			{/* <EditMenuItem /> */}
			<h1>menu list</h1>
			{menu.map((item, i) => (<EditMenuItem item={item} key={i}  />))}
			<EditMenuForm/>
		</div>

	)
}

export default EditMenu