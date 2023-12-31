import React, { useState } from 'react';
import "./Item.css";
import { FaTrash, FaEdit } from 'react-icons/fa'
import ItemCard from './ItemCard/ItemCard';
import EditItemForm from '../EditItemForm/EditItemForm';


export function Item({editExistingItem, item, adminMode, deleteItem, addOrder, increaseOrderCount}) {
	
	const [ editMode, setEditMode ] = useState(false);

	function editItemForm(img_url, title, descr, category, price){
		editExistingItem(item.id, img_url, title, descr, category, price);
		setEditMode(false)
	}

  return (
	 <div className='item'>
		{adminMode
		? (
			<div className='item_card'>
				<FaTrash onClick={() => deleteItem(item.id)} className="item_delete_icon" />
				<FaEdit onClick={() => setEditMode(!editMode)} className={`item_edit_icon ${editMode && "active"}`}/>
				{ editMode 
					? (
						<div>
							<img src={item.img_url} alt={item.category}></img>
							<EditItemForm  item = {item} 
												editItem={editItemForm}
												/>
						</div>

					)
					: <ItemCard item={item}/>
				}
			</div>
		)
		: (
			<div>
				<ItemCard item={item}/>
				<div className = "item_button_add" onClick={() => {addOrder(item); increaseOrderCount(item.id)
				}}> + </div>
			</div>
			)
		}
	 </div>
  )
}
