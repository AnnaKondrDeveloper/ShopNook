import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "./CreateItem.css";

export default function CreateItem(props) {

	const { register, 
		handleSubmit, formState: { errors } } = useForm();

const [ img, setImg] = useState("");
const [ title, setTitle] = useState("");
const [ descr, setDescr] = useState("");
const [ category, setCategory] = useState("");
const [ price, setPrice] = useState("");

function handleAddItem() {
	props.addItem(img, title, descr, category, price);
	setImg("");
	setTitle("");
	setDescr("");
	setCategory("");
	setPrice("");
}


  return (
	 <div className='new_item'>
		<h2 className='new_title'> Add new item</h2>
		<form>
			<div>
			<input  value={img} 
					{...register("firstName")}
								 className='new_item_input' 
								 placeholder='URL img' 
								 type="text"
			/>
		</div>
		<div>
			<input required value={title} 
								 className='new_item_input' 
								 placeholder='Title' 
								 type="text"
								 onChange={(e)=> setTitle(e.target.value)}
								 />
		</div>
		<div>
			<textarea required value={descr} 
									 className='new_item_textarea' 
									 placeholder='Description' 
									 type="text"
									 onChange={(e)=> setDescr(e.target.value)}
			/>
		</div>
		<div>		
			<select required className='new_item_input' 
								  value={category} 
								  onChange={(e)=> setCategory(e.target.value)}>
				<option value="none">Choose category</option>
				<option value="chairs">Chairs</option>
				<option value="sofas">Sofas</option>
				<option value="tables">Tables</option>
				<option value="lights">Lights</option>
			</select>
			</div>
		<div>
			<input required value={price} 
								 className='new_item_input' 
								 placeholder='$ Price' 
								 type="text"
								 onChange={(e)=> setPrice(e.target.value)}
			/>
		</div>
		<input type="submit" className='new_item_button' onClick={() => handleAddItem()} />
		</form>

	 </div>
  )
}
