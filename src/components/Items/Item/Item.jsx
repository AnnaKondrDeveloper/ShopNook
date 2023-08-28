import React, { useState } from 'react';
import "./Item.css";
import { FaTrash, FaEdit } from 'react-icons/fa'
import ItemCard from './ItemCard/ItemCard';
import EditItemForm from '../EditItemForm/EditItemForm';


export function Item(props) {
	
	const [ editMode, setEditMode ] = useState(false);

	function editItem(img_url, title, descr, category, price){
		props.editItem(props.item.id, img_url, title, descr, category, price);
		console.log(props.item.id)
		setEditMode(false)
	}

  return (
	 <div className='item'>
		{props.adminMode
		? (
			<div className='item_card'>
				<FaTrash onClick={() => props.deleteItem(props.item.id)} className="item_delete_icon" />
				<FaEdit onClick={() => setEditMode(!editMode)} className={`item_edit_icon ${editMode && "active"}`}/>
				{ editMode 
					? (
						<div>
							<img src={props.item.img_url} alt={props.item.category}></img>
							<EditItemForm item = {props.item} 
										  editItem={editItem}
										  />
						</div>

					)
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
