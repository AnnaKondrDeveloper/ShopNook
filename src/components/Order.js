import React from 'react'
import { FaTrash } from 'react-icons/fa'

export function Order(props) {
  return (
	 <div className='order'>
		<img src={"../img/" + props.order.img} alt={props.order.category}></img>
		<h2 className='order_title'>{props.order.title}</h2>
		<p className='order_price'>${props.order.price}</p>
		<FaTrash onClick={() => props.deleteOrder(props.order.id)} className="order_delete_button"/>
	 </div>
  )
}
