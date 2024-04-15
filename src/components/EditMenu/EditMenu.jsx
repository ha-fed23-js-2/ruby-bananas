import './edit-menu.css'
import EditMenuItem from './EditMenuItem'
import EditMenuForm from './EditMenuForm'
import {editMenuStore} from './data/editMenuStore'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import {saveToApi, loadFromApi} from '../API/Api'
import HeaderBack from	'../HeaderBack/HeaderBack'



function EditMenu() {
const {menu} = editMenuStore((state) =>  ({menu: state.menu}))

useEffect(() => {
	editMenuStore.getState().initializeMenu();
}, []);

console.log("Menu: ",menu);
return (



		<section className="edit-page">

			<HeaderBack/>

			<EditMenuForm/>
			{menu.map((item, i) => (<EditMenuItem item={item} key={i}  />))}
		</section>

	)
}

export default EditMenu