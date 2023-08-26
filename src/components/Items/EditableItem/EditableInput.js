import React from 'react';
import "../Items.css";
import "./EditableInput.css"
import { useForm } from "react-hook-form";

export function EditableInput(props) {


	const { 
		register, 
		handleSubmit, 
	} = useForm(	{	
		defaultValue: {
		img_url: props.item.img_url
	}});

	const onSubmit= (data) => {
		props.editItem(props.item.id, data.img_url, data.title, data.descr, data.category, data.price);
		props.setEditMode(!props.editMode)
	}
	
	return (
		<form className='edit_form' onSubmit={handleSubmit(onSubmit)}>					
		<img src={props.item.img_url} alt={props.item.category}></img>
		<textarea className='edit' 
					defaultValue={props.item.img_url} 
					type="text"
					{...register("img_url", {
							required: "Field is required"
						})}
					/>
		<input className='item_title edit' 
				 defaultValue={props.item.title} 
				 type="text"
				 {...register("title", {
							required: "Field is required"
						})}
				 />
		<textarea className='item_descr edit' 
					 defaultValue={props.item.descr} 
					 type="text" 
					 {...register("descr", {
							required: "Field is required"
						})}
					 />
		<select  className='item_category edit' 
					defaultValue={props.item.category} 
					type="text" 
					{...register("category", {
										required: "Field is required"
									})}
		>
			<option value="none">Choose category</option>
			<option value="chairs">Chairs</option>
			<option value="sofas">Sofas</option>
			<option value="tables">Tables</option>
			<option value="lights">Lights</option>
		</select>
		<input className='item_price edit' 
				 defaultValue={props.item.price} 
				 type="number"
				 {...register("price", {
						required: "Field is required"
						})}
				 />
		<input type="submit" className='item_edit_button'/>
	</form>
	)
}