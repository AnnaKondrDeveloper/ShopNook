import React from 'react';
import "../Items.css";
import "./EditableInput.css"
import { FaTrash } from 'react-icons/fa'
import { useForm } from "react-hook-form";

export function EditableInput(props) {

	const { 
		register, 
		handleSubmit, 
		reset,
		formState: { errors },
	} = useForm(	{	
		defaultValue: {
		img_url: props.item.img_url
}});

	// function activateEditMode () {
	// 	setText(props.name)
	// };

	// function activateViewMode () {
	// 	props.onChangeNameHandler(text);
	// }
	
	return (
		<form >
		<FaTrash onClick={() => props.deleteItem(props.item.id)} className="item_delete_button" />
		<img src={props.item.img_url} alt={props.item.category}></img>
		<textarea className='edit' 
					defaultValue={props.item.img_url} 
					type="text"
					{...register("img_url", {
							required: "Field is required"
						})}
					/>
		<input className='item_title edit' defaultValue={props.item.title} type="text"/>
		<textarea className='item_descr edit' defaultValue={props.item.descr} type="text" />
		<select  className='item_category edit' defaultValue={props.item.category} type="text" >
			<option defaultValue="none">Choose category</option>
			<option defaultValue="chairs">Chairs</option>
			<option defaultValue="sofas">Sofas</option>
			<option defaultValue="tables">Tables</option>
			<option defaultValue="lights">Lights</option>
		</select>
		<input className='item_price edit' defaultValue={props.item.price} type="number"/>
	</form>
	)
	
}