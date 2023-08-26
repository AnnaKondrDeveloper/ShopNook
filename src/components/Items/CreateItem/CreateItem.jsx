import React from 'react'
import { useForm } from "react-hook-form";
import "./CreateItem.css";

export default function CreateItem(props) {

	const { 
		register, 
		handleSubmit, 
		reset,
		formState: { errors }
	} = useForm();

const onSubmit= (data) => {
	props.addItem(data.img_url, data.title, data.descr, data.category, data.price);
	reset();
}

  return (
	 <div className='new_item'>
		<h2 className='new_title'>Add new item</h2>
		<form onSubmit={handleSubmit(onSubmit)}>
			<input 
					{...register("img_url", {
							required: "Field is required"
						})}
					className='new_item_input' 
					placeholder='URL img' 
					type="text"
			/>
			<div className="form_error">{errors?.img_url && <p>{errors?.img_url?.message || "Error"}</p>}</div>
			<input {...register("title", {
							required: "Field is required"
						})}
						className='new_item_input' 
						placeholder='Title'
						type="text" 
						/>
			<div className="form_error">{errors?.title && <p>{errors?.title?.message || "Error"}</p>}</div>
			<textarea {...register("descr", {
							required: "Field is required"
						})}
						className='new_item_textarea' 
						placeholder='Description' 
						type="text"
			/>
			<div className="form_error">{errors?.descr && <p>{errors?.descr?.message || "Error"}</p>}</div>
			<select {...register("category", {
							required: "Field is required"
						})}
						className='new_item_input'
						type="text"
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
						className='new_item_input' 
						placeholder='$ Price'
						type="number" 
			/>
			<div className="form_error">{errors?.price && <p>{errors?.price?.message || "Error"}</p>}</div>
		<input type="submit" className='new_item_button'/>
		</form>
	 </div>
  )
}
