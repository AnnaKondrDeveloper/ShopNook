import React, { useState } from 'react';
import "./Item.css";
import { EditableInput } from '../EditableItem/EditableInput';
import { FaTrash, FaEdit } from 'react-icons/fa'
import ItemCard from './ItemCard/ItemCard';


export function Item(props) {
	
	const [ editMode, setEditMode ] = useState(false);

  return (
	 <div className='item'>
		{props.adminMode
		? (
			<div >
				<FaTrash onClick={() => props.deleteItem(props.item.id)} className="item_delete_icon" />
				<FaEdit onClick={() => setEditMode(!editMode)} className={`item_edit_icon ${editMode && "active"}`}/>
				{ editMode 
					? <EditableInput item = {props.item} 
										  deleteItem = {props.deleteItem} 
										  editMode={editMode} 
										  setEditMode={setEditMode }
										  editItem={props.editItem}
										  />
					: <ItemCard item={props.item}/>
				}
			</div>
		)
		: (
			<div>
				<ItemCard item={props.item}/>
				<div className = "item_button_add" onClick={() => {props.addOrder(props.item);
				}}> + </div>
			</div>
			)
		}
	 </div>
  )
}
