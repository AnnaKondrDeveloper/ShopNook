import React from 'react'

export default function ItemCard(props) {
  return (
	<div className="item_card">
		<img src={props.item.img_url} alt={props.item.category}></img>
		<h2 className='item_title'>{props.item.title}</h2>
		<p className='item_descr'>{props.item.descr}</p>
		<p className='item_price'>${props.item.price}</p>
	</div>
  )
}
