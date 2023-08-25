import React from 'react';
import "./Item.css";
import { EditableInput } from '../EditableInput/EditableInput';


export function Item(props) {

  return (
	 <div className='item'>
		{props.editMode
		? (
			<EditableInput item = {props.item}
				deleteItem = {props.deleteItem}
			/>
		)
		: (
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
