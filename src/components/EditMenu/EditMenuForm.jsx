import { useState } from 'react'
import { editMenuStore } from './data/editMenuStore'

function EditMenuForm() {
    const { addMenuItem, resetMenu } = editMenuStore((state) => ({
        addMenuItem: state.addMenuItem,
        resetMenu: state.resetMenu
    }));

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [contains, setContains] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    async function handleAdd() {
        const newItem = {
            name: name,
            description: description,
            contains: contains,
            price: price,
            image: image
        };
        await addMenuItem(newItem);
        console.log(newItem); // Log the new item to console

        // Set success message and clear it after 3 seconds
        setSuccessMessage('Rätten har laddats upp!');
        setTimeout(() => setSuccessMessage(''), 3000);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result); // This is now a data URL
        };
        reader.readAsDataURL(file);
    }

    return (
        <>
            <div className="form-container">
                <div>
                    <input className="" type='file' onChange={handleImageChange} />
                </div>
                <div className="form-column">
                    <input type="text" placeholder="Title" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" placeholder='Contains' onChange={(e) => setContains(e.target.value)} />
                    <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                    {successMessage && <div className="success-message">{successMessage}</div>}
                </div>
                <div className="form-column2">
                    <button onClick={handleAdd}>Add to menu</button>
                    <button onClick={resetMenu}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default EditMenuForm;
