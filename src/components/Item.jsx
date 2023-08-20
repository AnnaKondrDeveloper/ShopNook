import React from 'react'

export function Item(props) {
  return (
	 <div className='item'>
	 	<img src={"../img/" + props.img} alt={props.category}></img>
		<h2 className='item_title'>{props.title}</h2>
		<p className='item_descr'>{props.descr}</p>
		<p className='item_price'>${props.price}</p>
		<div className = "item_button_add">+</div>
	 </div>
  )
}
