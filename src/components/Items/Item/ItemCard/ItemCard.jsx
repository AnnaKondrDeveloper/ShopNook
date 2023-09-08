import React from 'react'

export default function ItemCard({item}) {
  return (
	<div className="item_card">
		<img src={item.img_url} alt={item.category}></img>
		<h2 className='item_title'>{item.title}</h2>
		<p className='item_descr'>{item.descr}</p>
		<p className='item_price'>${item.price}</p>
	</div>
  )
}
