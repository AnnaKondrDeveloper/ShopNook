import React from 'react'

export function Item(props) {
  return (
	 <div className='item'>
	 	<img src={"../img/" + props.item.img} alt={props.item.category}></img>
		<h2 className='item_title'>{props.item.title}</h2>
		<p className='item_descr'>{props.item.descr}</p>
		<p className='item_price'>${props.item.price}</p>
		<div className = "item_button_add" onClick={() => {props.addOrder(props.item);
		}}>+</div>
	 </div>
  )
}
