import './edit-menu.css'
import EditMenuItem from './EditMenuItem'
import EditMenuForm from './EditMenuForm'
import {editMenuStore} from './data/editMenuStore'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import {saveToApi, loadFromApi} from '../API/Api'



function EditMenu() {
const {menu} = editMenuStore((state) =>  ({menu: state.menu}))

useEffect(() => {
	editMenuStore.getState().initializeMenu();
}, []);

console.log("Menu: ",menu);
return (



		<section className="edit-page">

			<header>
				<div>
					<Link to="/"><button>Back</button></Link>
				</div>
				<div className='logo'>
					<img src="./logo.png" />
				</div>

			</header>

			<EditMenuForm/>
			{menu.map((item, i) => (<EditMenuItem item={item} key={i}  />))}
		</section>

	)
}

export default EditMenu