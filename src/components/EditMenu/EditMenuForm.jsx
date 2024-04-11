import {useState} from 'react'
import {editMenuStore} from './data/editMenuStore'
import { saveToApi, loadFromApi } from '../API/Api.js'


function EditMenuForm() {

    const {addMenuItem} = editMenuStore((state) => ({ addMenuItem: state.addMenuItem}))
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [contains, setContains] = useState('')
	const [newItem, setNewItem] = useState(null)

	async function handleAdd() {
        await saveToApi({
            name: name,
            description: description,
            contains: contains,
            price: price,
            image: image
        });
        const newItem = {
            name: name,
            description: description,
            contains: contains,
            price: price,
            image: image
        };
        addMenuItem(newItem);
        console.log(newItem);
    }

	const handleLoad = async () => {
		const result = await loadFromApi()
		console.log('App.handleLoad result: ', result);
		setNewItem(result)
		// addMenuItem(newItem)
	}

    function handleImageChange(e) {
        const file = e.target.files[0]
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl);
    }

    return (
        <>
        <div className="form-container">
            <input className="" type='file' onChange={handleImageChange}/>
            <div className="form-column">
                <input type="text" placeholder="Title" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder='Contains' onChange={(e) => setContains(e.target.value)} />
            </div>
            <div className="form-column2">
                <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
                <button onClick={handleAdd}>Add to menu</button>
				<button onClick={handleLoad}> Load from API </button>
            </div>
        </div>
        </>
    )
}

export default EditMenuForm