import React from 'react';
import "./Item.css";
import { FaTrash } from 'react-icons/fa'


export function Item(props) {

  return (
	 <div className='item'>
		{props.editMode
		? (
		<div>
			<FaTrash onClick={() => props.deleteItem(props.item.id)} className="item_delete_button" />
			<img src={props.item.img_url} alt={props.item.category}></img>
			<textarea className='edit' value={props.item.img_url} />
			<input className='item_title edit' value={props.item.title} />
			<textarea className='item_descr edit' value={props.item.descr} />
			<select  className='item_category edit' value={props.item.category} >
				<option value="none">Choose category</option>
				<option value="chairs">Chairs</option>
				<option value="sofas">Sofas</option>
				<option value="tables">Tables</option>
				<option value="lights">Lights</option>
			</select>
			<input className='item_price edit' value={props.item.price} />
		</div>
		)
		:(
			<div>
			<img src={props.item.img_url} alt={props.item.category}></img>
			<h2 className='item_title'>{props.item.title}</h2>
			<p className='item_descr'>{props.item.descr}</p>
			<p className='item_price'>${props.item.price}</p>
			<div className = "item_button_add" onClick={() => {props.addOrder(props.item);
			}}>+</div>
			</div>
				)
		}
	 </div>
  )
}
