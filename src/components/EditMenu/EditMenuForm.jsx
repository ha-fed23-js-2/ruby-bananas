import {useState} from 'react'
import {editMenuStore} from './data/editMenuStore'


function EditMenuForm() {

    const {addMenuItem, menu} = editMenuStore((state) => { return { addMenuItem: state.addMenuItem}})

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    function handleAdd() {
        const newItem = {
            name: name,
            description: description,
            price: price,
            image: image  
        }
        addMenuItem(newItem)
        console.log(newItem);
    }

    return (
        <>
        <div className="form-container">
            <button className="" onChange={(e) => setImage(e.target.value)}>Add img +</button>
            <div className="form-column">
                <input type="text" placeholder="Title" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-column2">
                <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
                <button onClick={handleAdd}>Add to menu</button>
            </div>
        </div>
        </>
    )
}

export default EditMenuForm