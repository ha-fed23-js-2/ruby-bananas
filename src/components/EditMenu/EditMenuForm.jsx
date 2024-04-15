import {useState} from 'react'
import {editMenuStore} from './data/editMenuStore'
import { saveToApi, loadFromApi } from '../API/Api.js'

import './edit-menu.css'



function EditMenuForm() {

    const {addMenuItem} = editMenuStore((state) => ({ addMenuItem: state.addMenuItem}))
    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)

    const [description, setDescription] = useState('')
    const [descriptionTouched, setDescriptionTouched] = useState(false)

    const [price, setPrice] = useState('')
    const [priceTouched, setPriceTouched] = useState(false)

    const [image, setImage] = useState('')
	// const [imageTouched, setImageTouched] = useState(false);

    const [contains, setContains] = useState('')
    const [containsTouched, setContainsTouched] = useState(false)

		// Validate values
	const nameIsValid = name.length > 0;
	const nameErrorMessage = nameIsValid ? '' : 'Please enter a title.';

	const descriptionIsValid = description.length > 0;
	const descriptionErrorMessage = descriptionIsValid ? '' : 'Please enter a description.';

	const containsIsValid = contains.length > 0;
	const containsErrorMessage = containsIsValid ? '' : 'Please enter ingredients.';

	const priceIsValid = /^\d+$/.test(price);
	const priceErrorMessage = priceIsValid ? '' : 'Please enter a price.';

	// const imageIsValid = image !== '';
	// const imageErrorMessage = imageIsValid ? '' : 'Please select an image.';


	// CSS variables
	let nameErrorClass = 'edit-error ', nameClass = ''
	if( !nameTouched ) {
		nameErrorClass += 'hidden'
	} else {
		nameErrorClass += nameIsValid ? 'hidden' : 'invalid'
		nameClass += nameIsValid ? 'valid' : 'invalid'
	}
	let descriptionErrorClass = 'edit-error ', descriptionClass = ''
	if( !descriptionTouched ) {
		descriptionErrorClass += 'hidden'
	} else {
		descriptionErrorClass += descriptionIsValid ? 'hidden' : 'invalid'
		descriptionClass += descriptionIsValid ? 'valid' : 'invalid'
	}
	let priceErrorClass = 'edit-error ', priceClass = ''
	if( !priceTouched ) {
		priceErrorClass += 'hidden'
	} else {
		priceErrorClass += priceIsValid ? 'hidden' : 'invalid'
		priceClass += priceIsValid ? 'valid' : 'invalid'
	}
	let containsErrorClass = 'edit-error ', containsClass = ''
	if( !containsTouched ) {
		containsErrorClass += 'hidden'
	} else {
		containsErrorClass += containsIsValid ? 'hidden' : 'invalid'
		containsClass += containsIsValid ? 'valid' : 'invalid'
	}
	// let imageErrorClass = 'edit-error ', imageClass = '';
	// if (!imageTouched) {
	// 	imageErrorClass += 'hidden';
	// } else {
	// 	imageErrorClass += imageIsValid ? 'hidden' : 'invalid';
	// 	imageClass += imageIsValid ? 'valid' : 'invalid';
	// }


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
		// setImageTouched(true);
    }

    return (
        <>
        <div className="form-container">
			{/* <p className={imageErrorClass}> {imageErrorMessage} &nbsp; </p> */}
            <input 
				// className={imageClass} 
				type='file' 
				onChange={handleImageChange}
			/>
            <div className="form-column">
                <input 
					className={nameClass}
					type="text" 
					placeholder="Title" 
					onChange={(e) => setName(e.target.value)} 
					onBlur={() => setNameTouched(true)}
				/>
				<p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>
                <input 
					className={descriptionClass}
					type="text" 
					placeholder="Description" 
					onChange={(e) => setDescription(e.target.value)} 
					onBlur={() => setDescriptionTouched(true)}
				/>
				<p className={descriptionErrorClass}> {descriptionErrorMessage} &nbsp; </p>
                <input 
					className={containsClass}
					type="text" 
					placeholder='Contains' 
					onChange={(e) => setContains('Contains: ' + e.target.value)} 
					onBlur={() => setContainsTouched(true)}
				/>
					<p className={containsErrorClass}> {containsErrorMessage} &nbsp; </p>
            </div>
            <div className="form-column2">
                <input 
					className={priceClass}
					type="text" 
					placeholder="Price" 
					onChange={(e) => setPrice(e.target.value)}
					onBlur={() => setPriceTouched(true)}
				/>
					<p className={priceErrorClass}> {priceErrorMessage} &nbsp; </p>
                <button onClick={handleAdd}>Add to menu</button>
            </div>
        </div>
        </>
    )
}

export default EditMenuForm