import {useState} from 'react'
import {editMenuStore} from './data/editMenuStore'


function EditMenuForm() {

    const {addMenuItem, resetMenu} = editMenuStore((state) => ({ addMenuItem: state.addMenuItem,
    resetMenu: state.resetMenu}))
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [contains, setContains] = useState('')


	async function handleAdd() {
        
        const newItem = {
            name: name,
            description: description,
            contains: contains,
            price: price,
            image: image
        };
        await addMenuItem(newItem);
        console.log(newItem);
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
                <button onClick={resetMenu}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default EditMenuForm