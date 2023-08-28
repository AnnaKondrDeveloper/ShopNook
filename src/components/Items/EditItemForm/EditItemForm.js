import React from 'react'
import { useForm } from "react-hook-form"
import "./EditItemForm.css"

export default function EditItemForm(props) {

	const { 
		register, 
		handleSubmit, 
		reset,
		formState: { errors }
	} = useForm();

const onSubmit= (data) => {
	props.editItem(data.img_url, data.title, data.descr, data.category, data.price);
	reset();
}

  return (
	<form className='edit_form' onSubmit={handleSubmit(onSubmit)}>
	<textarea 
			{...register("img_url", {
					required: "Field is required"
				})}
			className='item_img edit' 
			placeholder='URL img' 
			type="text"
			defaultValue={props.item.img_url} 
	/>
	<div className="form_error">{errors?.img_url && <p>{errors?.img_url?.message || "Error"}</p>}</div>
	<input {...register("title", {
					required: "Field is required"
				})}
				className='item_title edit' 
				placeholder='Title'
				type="text" 
				defaultValue={props.item.title}
				/>
	<div className="form_error">{errors?.title && <p>{errors?.title?.message || "Error"}</p>}</div>
	<textarea {...register("descr", {
					required: "Field is required"
				})}
				className='item_descr edit' 
				placeholder='Description' 
				type="text"
				defaultValue={props.item.descr}
	/>
	<div className="form_error">{errors?.descr && <p>{errors?.descr?.message || "Error"}</p>}</div>
	<select {...register("category", {
					required: "Field is required"
				})}
				className='item_category edit'
				type="text"
				defaultValue={props.item.category}
				>
		<option value="">Choose category</option>
		<option value="chairs">Chairs</option>
		<option value="sofas">Sofas</option>
		<option value="tables">Tables</option>
		<option value="lights">Lights</option>
	</select>
	<div className="form_error">{errors?.category && <p>{errors?.category?.message || "Error"}</p>}</div>
	<input 	{...register("price", {
				required: "Field is required"
				})}
				className='item_price edit' 
				placeholder='$ Price'
				type="number"
				defaultValue={props.item.price} 
	/>
	<div className="form_error">{errors?.price && <p>{errors?.price?.message || "Error"}</p>}</div>
<input type="submit" className='item_edit_button'/>
</form>
  )
}
