import React from "react"
import { FaTrash } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"



import "./Order.css";

export function Order({order, deleteOrder}) {
  return (
	 <div className="order">
	 	<div className="order_item">
			<img className="order_img" src={order.img_url} alt={order.category}></img>
			<h2 className="order_title">{order.title}</h2>
		</div>
		<div className="order_count">
			<div className="order_count_input">{order.count}</div>
			<div className="order_count_controls">
				<IoIosArrowUp className="order_count_up"/>
				<IoIosArrowDown className="order_count_down"/>
			</div>
		</div>
		<p className="order_price">${order.price}</p>
		<FaTrash onClick={() => deleteOrder(order.id)} className="order_delete_button"/>
	 </div>
  )
}
