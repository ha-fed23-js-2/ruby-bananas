
import { useState } from "react"
import {editMenuStore} from './data/editMenuStore'
function EditMenuItem({item}) {

	const {deleteMenuItem, updateMenuItem} = editMenuStore((state) =>{return{deleteMenuItem: state.deleteMenuItem, updateMenuItem: state.updateMenuItem}})

	const [editMode, setEditMode] = useState(false)
	const [menuItemName, setMenuItemName] = useState(item.name)
	const [menuItemDescription, setMenuItemDescription] = useState(item.description)
	const [menuItemPrice, setMenuItemPrice] = useState(item.price)
	const [menuItemImage, setMenuItemImage] = useState(item.image)
	const [menuItemContains, setMenuItemContains] = useState(item.contains)


	function handleEditMenuItem () {
		let updatedMenuItem = {
			id: item.id,
			name: menuItemName,
			description: menuItemDescription,
			price: menuItemPrice,
			image: menuItemImage
		}

		updateMenuItem(updatedMenuItem)
		setEditMode(false)
		console.log('updatedMenuItem: ',updatedMenuItem)
	}

	function handleImageChange(e) {
        const file = e.target.files[0]
        const imageUrl = URL.createObjectURL(file)
        setMenuItemImage(imageUrl)
    }


	return (
		<article>
		{editMode ?
		<>
		<span className="line"></span>
			<div className="edit-menu-item-container">

			<input type="file" onChange={handleImageChange} />

					<div className="column">
						<input type="text" defaultValue={menuItemName} onChange={(e) => setMenuItemName(e.target.value)} />
						<input type="text" defaultValue={menuItemDescription} onChange={(e) => setMenuItemDescription(e.target.value)} />
						<input type="text" defaultValue={menuItemContains} onChange={(e) => setMenuItemContains(e.target.value)} />
					</div>
					<div className="column3">
					<button onClick={handleEditMenuItem}>Save</button>
					</div>
				<div className="column2">
					<button onClick={() => deleteMenuItem(item.id) }>
						<img src='./Vector.png' alt="" className='close' />
					</button>
					<input type="text" defaultValue={menuItemPrice} onChange={(e) => setMenuItemPrice(e.target.value)} />
				</div>

			</div>

			</>
			:
		<>

					<></>


			<div className="edit-menu-item-container">


					<img src={item.image} alt="" className='course-img' />
					<div className="column">
						<h3>{item.name}</h3>
						<p className="edit-menu-item-description">{item.description}</p>
						<p className="">{item.contains}</p>
					</div>

					<div className="column3">
						<button className="edit-menu-button" onClick={() => setEditMode(true)}>Edit</button>
					</div>

					<div className="column2">
					<button onClick={() => deleteMenuItem(item.id) }>
						<img src="./Vector.png" alt="Delete" className='close' />
					</button>
					<p className="edit-menu-item-price">${item.price}</p>
				</div>

			</div>

		</>
		}
		</article>

	)

}

export default EditMenuItem