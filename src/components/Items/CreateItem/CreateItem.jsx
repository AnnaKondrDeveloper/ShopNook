import React from 'react'
import "./CreateItem.css";

export default function CreateItem() {
  return (
	 <div className='new_item'>
	 <h2 className='new_title'> Add new item</h2>
	 <div><input required className='new_item_img' placeholder='URL img' type="text"/></div>
	 <div><input required className='new_item_title' placeholder='Title' type="text"/></div>
	 <div><textarea required className='new_item_title' placeholder='Description' type="text"/></div>
	 <div>		
	 	<select required className='new_item_category'>
			<option value="none">Choose category</option>
			<option value="chairs">Chairs</option>
			<option value="sofas">Sofas</option>
			<option value="tables">Tables</option>
			<option value="lights">Lights</option>
   	</select>
		</div>
	 <div><input required className='new_item_price' placeholder='$ Price' type="text"/></div>
	 <button className='new_item_button'>+</button>
	 </div>
  )
}
